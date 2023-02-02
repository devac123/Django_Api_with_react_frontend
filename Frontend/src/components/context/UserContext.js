import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
export const UserContext  = createContext()


export default  function AuthProvider({children}){
        const [token, setToken] =useState(null)
        const [user, setUser] = useState(null)
        
        useEffect(()=>{
            const Authtoken = localStorage.getItem('authToken')
            if(Authtoken){
                var decoded = jwt_decode(Authtoken);
                console.log(decoded?.user_id)
            }
            
        })
        return (
            <UserContext.Provider value={user}>
                {children}
            </UserContext.Provider>
        )
}
