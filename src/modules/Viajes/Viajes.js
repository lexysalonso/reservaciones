import { ViajeProvider } from 'context/ViajesContext';
import React from 'react'
import ViajesCrud from './ViajesCrud';


const Viajes = () => {
  return (
     <ViajeProvider>
         <ViajesCrud/>
     </ViajeProvider> 
  )
}

export default Viajes;