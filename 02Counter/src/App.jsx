import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 15;

let [counter, setCounter] = useState(15);

// Add value Arrow function
const addValue = () => {
  console.log("Value Added", counter);
  counter = counter + 1;
  setCounter(counter);
  if (counter == 20 ) {
   let add_value = document.getElementById('add_value');
   if(addValue){
    add_value.style.display = "none";
   }
  }  
}

const removeValue = () => {
  counter = counter - 1;
 setCounter(counter);
 if(counter == 0){
  let remove_value = document.getElementById('remove_value');
  remove_value.style.display= "none";
 }
}

  return (
    <>
      <h2>Counter Value is {counter}</h2>
      <br/>
      <button onClick={addValue} id="add_value">Add Value {counter}</button>
      <br/>
      <button onClick={removeValue} id='remove_value'>Remove Value {counter}</button>
      <br/>
      <p>Footer { counter }</p>
    </>
  )
}

export default App
