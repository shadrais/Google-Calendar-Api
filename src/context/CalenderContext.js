import { createContext, useState } from 'react'

const CalenderContext = createContext()

export const CalendarProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [SignedIn, setSignedIn] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [userProfile, setUserProfile] = useState(null)

  return (
    <CalenderContext.Provider
      value={{
        SignedIn,
        data,
        setSignedIn,
        setData,
        clicked,
        setClicked,
        userProfile,
        setUserProfile,
      }}>
      {children}
    </CalenderContext.Provider>
  )
}

export default CalenderContext
