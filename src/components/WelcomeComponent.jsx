import React from 'react'
import { ButttonComponent } from './ButttonComponent'
import "../styles/WelcomeComponentStyle.css"

export const WelcomeComponent = () => {

    const buttonText = "Comenzar Cata"
    const route = "/"
  return (
    <section className='home-section'>
        <div
        className='home-text-container'><p className='home-text'>¡Bienvenid@!

        nuestro Asistente de Cata te ayudará a valorar si la cerveza que tienes entre manos está dentro de su estilo según los estándares de JSP.</p>
        </div>
        <ButttonComponent text={buttonText} route={route}/>
    </section>
  )
}
