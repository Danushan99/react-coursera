import React from 'react'
import '../index.css';

function Header(props) {
  console.log(props);
  return (
    <div>
    <h1> Helo there indeed  </h1>,
    <h2>{props.name}{props.color}</h2>
    </div>
  )
}

export default Header