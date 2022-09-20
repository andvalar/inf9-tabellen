import { useState } from 'react'
import './App.css'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function Task({ prompt, description, image, hasImage }) {  

  return (
    <my-task>
      <prompt-line>{ prompt }</prompt-line>
      <flex-container>
        { 
          hasImage &&
            <img src={ image } />
        }
        <promt-description>{ description }</promt-description>
      </flex-container>
    </my-task>
  )
}