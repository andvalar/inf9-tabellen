import { useState } from 'react'
import './App.css'
import { MultipleChoice } from './MultipleChoice'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function Intro() {  

  return (
    <my-intro>
      <h3>Tabellendokumente erstellen, verändern und formatieren</h3>
      Mit Excel, Calc oder ähnlichen Programmen...

      <MultipleChoice 
        prompt={ "Wähle die Tabellenkalkulationsprogramme aus!" } 
        options={ [
          "Ubuntu Nano", 
          "Microsoft Office Excel", 
          "LibreOffice Calc",
          "Apple Pages",
          "Samsung Tables",
          "Apple Numbers",
        ] } 
        correctOptions={ [
          1, 2, 5,
        ] } 
      />


    </my-intro>
  )
}