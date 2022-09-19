import { useState } from 'react'
import './App.css'
import { Lesson } from './Lesson'
import { Intro } from './Intro'
import { Entry } from './Entry'
import { MultipleChoice } from './MultipleChoice'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function Topic() {

  return (
    <my-topic>
      <h2>Tabellenkalkulation</h2>
      <div class="text">
        Ein Tabellenkalkulationsprogramm ist eine Software, mit der man Tabellen erstellen und verwalten kann. 
        In diesem Tabellen kann der Computer automatische Berechnungen durchführen.
      </div>
      
      <Lesson />
    </my-topic>
  )
}