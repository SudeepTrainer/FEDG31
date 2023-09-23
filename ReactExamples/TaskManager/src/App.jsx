import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton';

// let message = "Hello React!";

// function App() {
//   return <h1>{message}</h1>
// }

function Hello() {
  return <h1>Hello React!</h1>;
}

let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// let days = [<h1>Mon</h1>, <h1>Tue</h1>, <h1>Wed</h1>];
let daysWithHeader = days.map((day) => <h1>{day}</h1>)
// JSX syntax
function App() {
  return (
    < div >
      {days}
      <Hello />
      <Hello />
      <MyButton title={"Login"} class={"large"} />
    </div >
  );
}

export default App
