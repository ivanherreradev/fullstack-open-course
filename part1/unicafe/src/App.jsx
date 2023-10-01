import React, { useState } from 'react'

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  return (
    <div>
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
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <main>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleBadClick}>bad</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </main>
  )
}

export default App
