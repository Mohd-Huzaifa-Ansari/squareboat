import React from 'react'
import "./Button.css"

const Button = (props) => {
  return (
    <>
      <div className='btn'>
                    <button>{props}</button>
                    
      </div>
    </>
  )
}

export default Button
