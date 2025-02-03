import { useState } from 'react'
import ProductLists from './components/ProductLists'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductLists />
    </>
  )
}

export default App
