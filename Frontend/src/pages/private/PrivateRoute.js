import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute(props) {
    const {component}  = props
    const naavigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('authToken')){
            naavigate('sign-in-advance')
        }
    })
  return component
}

export default PrivateRoute