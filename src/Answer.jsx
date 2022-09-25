import { useState } from 'react'
import './App.css'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function MultipleChoice({ prompt, answer }) {  // options:labels bennent um
  const [isSolutionVisible, setIsSolutionVisible] = useState(false)

  return (
    <my-answer>
      <prompt-line>{ prompt }</prompt-line>
        <input type="text" onChange={ evt => // copy&paste aus MultipleChoice, muss noch...
                setOptions(options =>   
                  options.map((option, idx) => 
                    index !== idx ? option : { label, correct, selected:evt.target.checked } 
                  )
                )
        } />
      <button onClick={() => setIsSolutionVisible(true)} className="send">Prüfen</button>
    </my-answer>
  )
}