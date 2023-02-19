import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../../components/Header/Header"
import { Separator } from "../../components/Separator/Separator"
import { Tweet } from "../../components/Tweet/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'React',
    'NodeJs',
    'TypeScript'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='status'>
      <Header title='Tweet' />


      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo id dolor corrupti hic et reiciendis aut magni! Quibusdam, earum distinctio officia quo exercitationem laborum aspernatur expedita fuga porro optio!" />

      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/Gustavo-Leite.png' alt='GustavoLeite' />
          <textarea
            id='tweet'
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}
