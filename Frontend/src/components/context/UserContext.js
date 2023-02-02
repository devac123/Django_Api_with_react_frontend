import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { GetUser } from "../../pages/request/request";
export const UserContext = createContext()


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const Authtoken = localStorage.getItem('authToken')
    if (Authtoken) {
        var decoded = jwt_decode(Authtoken);
        GetUser({ id: decoded?.user_id }).then((response) => {
            console.log(response)
                //  setUser(response.data)  

        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
