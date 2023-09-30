import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const img1 = "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=612x612&w=0&k=20&c=5LyslY4gssQ99CVUrUB2K75Mx2TFgnkxboAqB38OPUQ=";

  const img2 = "https://media.istockphoto.com/id/1421479531/photo/shot-of-a-handsome-young-businessman-using-a-digital-tablet-while-working-late-in-his-office.webp?b=1&s=612x612&w=0&k=20&c=dDOkXk1VvBgMNe4ZKsZ9An1uXpSb7Ug-vlHu2kmNArs=";
  return (
    <>
      <h1 className='bg-red-400 text-white rounded p-4 m-4'>This is Tailwind</h1>
      <Card name="Abhi" img={img1} title="Developer" btnText="Visit Me"/>
      <Card name="Tukai" img={img2} title="Senior Developer" btnText="Click Me"/>
    </>
  )
}

export default App
