import axios from 'axios'

const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || 'https://dobu-martial-class.onrender.com'

async function apiRequest(path, payload) {
  try {
    const response = await axios.post(`${apiBaseUrl}${path}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    const message =
      error.response?.data?.error ||
      error.message ||
      'The assistant could not reach the backend.'
    throw new Error(message)
  }
}

export function signUpWithAssistant(payload) {
  return apiRequest('/signup', payload)
}

export function loginWithAssistant(payload) {
  return apiRequest('/login', payload)
}

export { apiBaseUrl }
