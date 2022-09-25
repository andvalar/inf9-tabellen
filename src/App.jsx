import { useState } from 'react'
import './App.css'
import { Nav } from './Nav'
import { Topic } from './Topic'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"

function App() {
  const [completed, setCompleted] = useState(0)
  const [topic, setTopic] = ""

  return (

    <>
      <Nav />
      <h1>Informatik 9</h1>

      <Topic />
    </>
  )
}

export default App