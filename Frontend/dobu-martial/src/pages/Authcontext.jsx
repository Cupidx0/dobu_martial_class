import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()
const STORAGE_KEY = 'dobu-auth-user'

function readStoredUser() {
  const rawUser = localStorage.getItem(STORAGE_KEY)
  if (!rawUser) {
    return null
  }

  try {
    return JSON.parse(rawUser)
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(() => readStoredUser())

  const setUser = (nextUser) => {
    setUserState(nextUser)
    if (nextUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
      return
    }

    localStorage.removeItem(STORAGE_KEY)
  }

  const value = {
    isLoggedIn: Boolean(user),
    user,
    setUser,
    logout: () => setUser(null),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
