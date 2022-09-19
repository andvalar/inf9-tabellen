import { useState } from 'react'
import './App.css'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function Task(prompt) {  

  return (
    <my-task>
      <prompt-line>{ prompt }</prompt-line>
    </my-task>
  )
}