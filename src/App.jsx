import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectManagementUI from './ProjectManagementUI '

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProjectManagementUI/>
    </>
  )
}

export default App
