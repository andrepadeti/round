import { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'

const Answers = ({ children }) => {
  const [showAnswers, setShowAnswers] = useState(false)
  // in case I need to use the same component again on the same page,
  // create a random id for the checkbox so that I don't end up having one
  // checkbox messing up with another
  const [id, setId] = useState()
  useEffect(() => {
    setId(Math.random().toString())
  }, [])

  return (
    <div className="row">
      <div className="form-check fs-7">
        <input
          type="checkbox"
          className="form-check-input"
          checked={showAnswers}
          onChange={() => setShowAnswers(!showAnswers)}
          value=""
          id={id}
        />
        <label htmlFor={id} className="form-check-label">
          Mostrar resposta
        </label>
      </div>
      <Fade when={showAnswers} collapse>
        {children}
      </Fade>
      {/* <div className={`${showAnswers ? 'show' : 'hide'}`}>{children}</div> */}
      <style jsx>
        {`
          .show {
            visibility: visible;
            opacity: 1;
            transition: visibility 0s linear 0s, opacity 300ms;
          }
          .hide {
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s linear 300ms, opacity 300ms;
          }
        `}
      </style>
    </div>
  )
}

export default Answers
