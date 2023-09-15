import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



// let message = "Hello React!";

// function App() {
//   return <h1>{message}</h1>
// }

function Hello() {
  return "Hello React!";
}
// JSX syntax
function App() {
  return (
    <div>
      <Hello />
      <Hello />
    </div>
  );
}

export default App
