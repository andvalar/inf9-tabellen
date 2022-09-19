import { useState } from 'react'
import './App.css'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function Nav() {  

  return (
    <my-nav>
      <a href="#">Tabellendokumente</a>
      <a href="#">Formeln</a>
      <a href="#">Funktionen</a>
    </my-nav>
  )
}