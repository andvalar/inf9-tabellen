import { useState } from 'react'
import './App.css'
import { Hint } from './Hint'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function Task({ prompt, description, image }) {  

  return (
    <my-task>
      <prompt-line>{ prompt }</prompt-line>
      <flex-container>
        { 
          image &&
            <img src={ image } />
        }
        <promt-description>{ description }</promt-description>
      </flex-container>
    </my-task>
  )
}