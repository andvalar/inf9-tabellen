import { useState } from 'react'
import './App.css'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function Nav() {  

  return (
    <my-nav>
      <a href="#">Link1</a>
      <a href="#">Link2</a>
      <a href="#">Link3</a>
    </my-nav>
  )
}