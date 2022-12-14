import React from 'react'
import { ReservacionesProvider } from 'context/ReservacionesContext'
import Reservar from './Reservar'

const ReCrud = () => {
  return (
    <ReservacionesProvider>
         <Reservar></Reservar>
    </ReservacionesProvider>  
    
  )
}

export default ReCrud