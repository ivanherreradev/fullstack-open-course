import React, { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  return (
    <main>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleBadClick}>bad</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {isNaN(average) ? 0 : average}</p>
      <p>
        Positive Percentage:{' '}
        {isNaN(positivePercentage) ? 0 : positivePercentage}%
      </p>
    </main>
  )
}

export default App
