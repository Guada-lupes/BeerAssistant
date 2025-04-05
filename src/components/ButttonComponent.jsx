import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/ButtonComponentStyle.css"

export const ButttonComponent = ({route, text}) => {
const navigate = useNavigate();

    function routeHandle(route) {
navigate(route)
        
    }

  return (
    <button className='button-component' onClick={()=>routeHandle(route)}>
        <p>{text}</p>
    </button>
  )
}
