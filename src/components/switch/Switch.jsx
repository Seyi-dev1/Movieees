import React from 'react'
import './switch.css'

const Switch = () => {
  return (
    <label className='switch'>
    <input type='checkbox'/>
    <span className='slider rounded'/>
    </label>
  )
}

export default Switch