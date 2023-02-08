import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { GetUser } from "../../pages/request/request";
export const UserContext = createContext()


export default function AuthProvider({ children }) {
    const [user, setUser] = useState()

    const Authtoken = localStorage.getItem('authToken')
    useEffect(()=>{
       if(Authtoken){
            var decoded = jwt_decode(Authtoken);
            GetUser({ id: decoded?.user_id }).then(async (response) => {
                await setUser(response.data)  
            }).catch((error) => {
                console.log(error)
            })
        }
    },[Authtoken])
    

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
