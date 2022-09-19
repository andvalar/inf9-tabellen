import { useState } from 'react'
import './App.css'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function MultipleChoice({ prompt, options:labels, correctOptions }) {  // options:labels bennent um
  const [options, setOptions] = useState(() => labels.map((label, index) =>    // () => damit als Fkt, die nur initial aufg wird
    ({ 
      label, 
      selected:false, 
      correct:correctOptions.includes(index), 
    })
  ))
  const [isSolutionVisible, setIsSolutionVisible] = useState(false)

  return (
    <my-multiplechoice>
      <prompt-line>{ prompt }</prompt-line>
      <flex-container>
      {options.map(({ label, selected, correct }, index) =>  // option destructured in die attr
        <label key={label} className={clsx(
            selected && "selected", 
            isSolutionVisible && (selected === correct ? "correct" : "incorrect"),
          )}>
          <input type="checkbox" className="invis" onChange={ evt => 
              setOptions(options =>   // options => gibt garantiert aktuelle options, als Fkt
                options.map((option, idx) => 
                  index !== idx ? option : { label, correct, selected:evt.target.checked } 
                )
              )
          } />
          {label}
        </label>
      )}
      </flex-container>
      <button onClick={() => setIsSolutionVisible(true)} className="send">Prüfen</button>
    </my-multiplechoice>
  )
}