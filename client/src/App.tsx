import { useState } from 'react'
import './App.css'
import Join from './components/Join/join'
import Chat from './components/Chat/chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Join />
      <Chat />
    </div>
  )
}

export default App
