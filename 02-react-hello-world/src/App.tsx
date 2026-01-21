import { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function TestComponent() {
    const [heading, setHeading] = useState("Test Component Heading");
    return (
      <>  
        <div>
          {heading}
        </div>
        <button onClick={() => setHeading("New Heading")}>Change heading</button>
      </>
    )
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <HelloWorld />
      <TestComponent />
    </>
  )
}

export default App
