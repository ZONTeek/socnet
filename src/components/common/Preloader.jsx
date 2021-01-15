import React from 'react';
import preloader from './preloader.svg'

const Preloader = () => {
  return <img alt="preloader"
    src={preloader}
    style={{
      textAlign: 'center',
      width: '70px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  />
}
export default Preloader;