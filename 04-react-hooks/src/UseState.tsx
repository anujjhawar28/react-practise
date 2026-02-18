import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({
    name: 'Anuj Jhawar',
    age: 18
  })

  const changeName = () => {
    setPerson((previous) => {
      return {
        ...previous,
        name: 'Anuj Jhawar 2.0'
      }
    })
  }

  console.log('App render')

  const increment = () => {
    setCount((previous) => previous + 1)
  }

  const decrement = () => {
    setCount((previous) => previous - 1)
  }

  return (
    <>
      {/* <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button> */}
      {person.name} - {person.age}
      <button onClick={() => changeName()}>Change Name </button>
    </>
  )
}

export default App
