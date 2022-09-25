import { useState } from 'react'
import './App.css'
import { LessonPage } from './Topic'
import { Header, Footer } from './Outline'
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom"

function App() {
  const [completed, setCompleted] = useState(0)

  return (

    <>
      <BrowserRouter basename="/inf9-tabellen">
          <Header />
            <Routes>
              <Route path="lesson/:topic/:lesson" element={ <LessonPage /> } />
              {/*<Route path="topics" element={ <ToC/> } />*/}
              <Route path="/" element={ <Navigate to="lesson/tabellen/tabellendokumente" /> } />
              <Route path="*" element={ "Not found" } />
            </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App