import './Character.css'
// import React from 'react'

const Character = ({ letterObj}) => {
  
  const { status } = letterObj
  let statusClass = {
    correct: "correct-character",
    incorrect: "incorrect-character",
    notAttempted: "notAttempted-character",
  }[status]
  return (
    <span className={`current__character ${statusClass}`}>
      {letterObj.selectedChar}
    </span>
  )
}

export default Character