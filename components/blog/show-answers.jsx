import { useState } from 'react'

const Answers = ({ children }) => {
  const [showAnswers, setShowAnswers] = useState(false)
  return (
    <div className="row">
      <div className="form-check fs-7">
        <input
          type="checkbox"
          className="form-check-input"
          checked={showAnswers}
          onChange={() => setShowAnswers(!showAnswers)}
          value=""
          id="showAnswers"
        />
        <label htmlFor="showAnswers" className="form-check-label">
          Mostrar resposta
        </label>
      </div>
      <div className={`${showAnswers ? 'show' : 'hide'}`}>{children}</div>
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
