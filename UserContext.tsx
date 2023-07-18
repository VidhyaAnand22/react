import React, {useState, createContext } from "react"

export type AuthUser = {
    name: string
    email: string
}
export type UserContextType ={
    UserSt: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export type UserContextProviderProps = {
    children: React.ReactNode
}
export const  UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({children}: UserContextProviderProps) =>{
const [UserSt,setUser]= useState<AuthUser | null>(null)
return (
<UserContext.Provider value ={{UserSt, setUser}}>{children}</UserContext.Provider>

)
}