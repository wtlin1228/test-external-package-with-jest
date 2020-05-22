import React from 'react'
import KA from 'KA'

function App() {
  const { name, birthday } = KA.getUserProfile()
  return (
    <div className="App">
      {KA && (
        <div>
          <h3 data-testid="name">name: {name}</h3>
          <h3 data-testid="birthday">birthday: {birthday}</h3>
        </div>
      )}
    </div>
  )
}

export default App
