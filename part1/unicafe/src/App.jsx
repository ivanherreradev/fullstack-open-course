import React, { useState } from 'react'

const StatisticsLine = ({ text, statistic }) => {
  const displayStatistic = text === 'Positive Percentage' ? `${statistic}%` : statistic
  return <p>{text}: {displayStatistic}</p>
}

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  return (
    <>
      {total === 0
        ? (
        <p>No feedback given</p>
          )
        : (
        <div>
          <h2>Statistics</h2>
          <StatisticsLine text='Good' statistic={good}/>
          <StatisticsLine text='Neutral' statistic={neutral}/>
          <StatisticsLine text='Bad' statistic={bad}/>
          <StatisticsLine text='Total' statistic={total}/>
          <StatisticsLine text='Average' statistic={isNaN(average) ? 0 : average}/>
          <StatisticsLine text='Positive Percentage' statistic={isNaN(positivePercentage) ? 0 : positivePercentage}/>
        </div>
          )}
    </>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
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
      <Button text='good' handleClick={handleGoodClick}/>
      <Button text='bad' handleClick={handleBadClick}/>
      <Button text='neutral' handleClick={handleNeutralClick}/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </main>
  )
}

export default App
