import React from 'react'
import KA from 'KA'
import './App.css'

function App() {
  const { name, birthday } = KA.getUserProfile()
  return (
    <div className="App">
      <h3>name: {name}</h3>
      <h3>birthday: {birthday}</h3>
    </div>
  )
}

export default App
