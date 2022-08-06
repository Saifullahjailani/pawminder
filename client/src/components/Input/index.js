import React from 'react'
import {useState} from 'react'
import "./input.css"

const Input = ({txt, position, setState, def, inpType}) => {
  return (
    <input className="Input" type={inpType || "text"} placeholder={def || "Default Value"} onChange={(val)=>{setState(val.target.value)}} 
    style={{
      top: position.top,
      left: position.left,
    }}
    />

  
  )
}

export default Input