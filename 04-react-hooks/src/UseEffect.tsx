import { useState, useEffect } from 'react'

function UseEffect() {
  const [resourceType, setResourceType] = useState('users')
  const [items, setItems] = useState([])  

  useEffect(() => {
    const getResource = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const data = await response.json()
      setItems(data)
    }

    getResource()
  }, [resourceType])
  
  return (
    <>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>

        {items.map((item, index) => (
          <pre key={index}>{JSON.stringify(item)}</pre>
        ))}
    </>
  )
}

export default UseEffect
