import React, { useState } from 'react'

function Navbar() {
   const [color, SetColor] = useState("olive");
    return (
        <>
            <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
                <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                        <button className='outline-none px-4 py-2 shadow-lg text-white rounded-full' style={{backgroundColor: "red"}} onClick={ () => SetColor('red')}>Red</button>
                        <button className='outline-none px-4 py-2 shadow-lg text-white rounded-full' style={{backgroundColor: "olive"}} onClick={() => SetColor('olive')}>Olive</button>
                        <button className='outline-none px-4 py-2 shadow-lg text-black rounded-full' style={{backgroundColor: "yellow"}} onClick={() => SetColor('yellow')}>Yellow</button>
                        <button className='outline-none px-4 py-2 shadow-lg text-black rounded-full' style={{backgroundColor: "white"}} onClick={() => SetColor('white')}>White</button>
                        <button className='outline-none px-4 py-2 shadow-lg text-white rounded-full' style={{backgroundColor: "black"}} onClick={() => SetColor('black')}>Black</button>
                        <button className='outline-none px-4 py-2 shadow-lg text-white rounded-full' style={{backgroundColor: "purple"}} onClick={() => SetColor('purple')}>Purple</button>
                        <button className='outline-none px-4 py-2 shadow-lg text-white rounded-full' style={{backgroundColor: "blue"}} onClick={() => SetColor('blue')}>Blue</button>
                        <button className='outline-none px-4 py-2 shadow-lg text-white rounded-full' style={{backgroundColor: "green"}} onClick={() => SetColor('green')}>Green</button>
                        <button className='outline-none px-4 py-2 shadow-lg text-white rounded-full' style={{backgroundColor: "gray"}} onClick={() => SetColor('gray')}>Gray</button>
                        <button className='outline-none px-4 py-2 shadow-lg text-black rounded-full' style={{backgroundColor: "pink"}} onClick={() => SetColor('pink')}>Pink</button>
                        <button className='outline-none px-4 py-2 shadow-lg text-black rounded-full' style={{backgroundColor: "lavender"}} onClick={() => SetColor('lavender')}>Lavender</button>
                        <button className='outline-none px-4 py-2 shadow-lg text-white rounded-full' style={{backgroundColor: "crimson"}} onClick={() => SetColor('crimson')}>Crimson</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar