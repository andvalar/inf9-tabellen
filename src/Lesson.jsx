import { useState } from 'react'
import './App.css'
import { Intro } from './Intro'
import { Entry } from './Entry'
import { MultipleChoice } from './MultipleChoice'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function Lesson() {

  return (
    <div>
      <Intro />
      <Entry />

      <MultipleChoice 
        prompt={ "Was ist ein Tabellenkalkulationsprogramm?" } 
        options={ [
          "Software zum Schreiben und Designen von Tabellen", 
          "Software zum Erstellen und Verwalten von Tabellen, mit denen automatische Berechnungen gemacht werden können", 
          "Software zum Zeichnen von Tabellen, in denen Informationen aus dem Internet bezogen werden",
        ] } 
        correctOptions={ [
          1
        ] } 
      />

      <Task 
        prompt={ "Mach das!" }
      />
    </div>
  )
}