import React from 'react'
import loadingGif from "./loadergif.gif"
const Mloader = () => {
  return (
    <div style={{
        display : "flex",
        justifyContent : "center"
    }}>
       <img style={{
        width : "50%"
       }} src={loadingGif} alt="wait until the page loads" />
    </div>
  )
}

export default Mloader