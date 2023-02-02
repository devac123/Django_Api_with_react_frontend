import axios from "axios"


export async function createuser(data){
    return axios.post('http://localhost:3001/api/create-user',{data})
}

export async function AuthCheck(data){
    return axios.post('http://localhost:3001/api/auth',{data})
}

export async function isAuth(data){
    return axios.post('http://localhost:3001/api/auth',{data})
}

export function loginUser(data){
    return axios({
        method: "POST",
        url:"http://localhost:8000/api/token/",
        data:{
          username: data?.username,
          password: data?.password,
         }
      })
}
export function GetUser(id){
    return axios({
        method: "POST",
        url:"http://localhost:8000/api/user/",
        data:id
      })
}


