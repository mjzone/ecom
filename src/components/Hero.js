import React from "react";

const Hero = ({children}) => {
  return (
    <div className="hero">
      <div className="banner">
        <h1>think, code, deploy</h1>
        <p>embrace the power of bigger thinking</p>
        {children}
      </div>
    </div>
  )
}

export default Hero
