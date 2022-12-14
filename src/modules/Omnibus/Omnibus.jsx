import React from 'react'
import OmnibusCrud from './OmnibusCrud';
import { OmnibusProvider } from 'context/OmnibusContext';

const Omnibus = () => {
  return (
      <OmnibusProvider>
          <OmnibusCrud />
      </OmnibusProvider>
  )
}

export default Omnibus;