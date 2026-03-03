import { useState } from 'react'

import './App.css'
import Header1 from './components/header1'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header1/>
  <Section1/>
  <Section2/>
  <Section3/>
  </>
  )
}

export default App
