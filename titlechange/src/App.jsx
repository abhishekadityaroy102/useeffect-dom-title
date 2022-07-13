import { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
useEffect(()=>{
 if(count==0){
  document.title="Please click the button"
 }
 else{
document.title=`You clicked ${count} times`
 }
},[count])

  return (
    <div className="App">
      <h2>count is : {count}</h2>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default App
