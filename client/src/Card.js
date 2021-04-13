import React from 'react'

const Card = () => { 
  return (
    <div className="card">
      <Input />
      <Input />
      <Button className="login" text="Log In" />
      <Button className="demo" text="Demo Account" />
    </div> 
  ) 
}

const Input = () => {
  return (
    <input type="text" / >
  )
}

const Button = ({ className, text }) => {
  return (
    <button className={className}>{text}</button>
  )
}

export default Card;