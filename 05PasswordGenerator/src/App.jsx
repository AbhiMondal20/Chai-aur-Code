import { useCallback, useState } from 'react'
function App() {
 const [length, setLength] = useState(8);
 const [noAllowed, setNoAllowed] = useState(false);
 const [chatAllowed, setCharallowed] = useState(false);
 const [password, setPassword] = useState("");
 
 passwordGenerator = useCallback(()=> {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz"
  if(noAllowed) str+= "1234567890"
  if(chatAllowed) str+= "?><.,/':;{}[]\|~`!@#$%^&*()_-+=/*₹"

  for (let i = 1; i <= array.length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass = str.charAt(char)
  }
  setPassword(pass)
 }, [length, noAllowed, chatAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        <div className='flex shadow rou-lg overflow-hidden mb-4'>
          <input type='text' value={passwordGenerator()} className='outline-none w-full py-1 px-3' placeholder='Password'
          required
           />
        </div>
      </div>
    </>
  )
}

export default App
