import { useCallback, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [noAllowed, setNoAllowed] = useState(false);
  const [chatAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (noAllowed) str += "1234567890";
    if (chatAllowed) str += "?><.,/':;{}[]\\|~`!@#$%^&*()_-+=/*₹";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, noAllowed, chatAllowed]);

  // Copy to Clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();0
    passwordRef.current.setSelectionRange(0, password.length); // Select the entire password
    document.execCommand('copy');
  }, [password]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <span>{length}</span>
          </div>
          <label>
            <input
              type="checkbox"
              checked={noAllowed}
              onChange={() => setNoAllowed(!noAllowed)}
            />
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={chatAllowed}
              onChange={() => setCharAllowed(!chatAllowed)}
            />
            Special Characters
          </label>
        </div>
        <button onClick={passwordGenerator} className='bg-blue-700 text-white px-3 py-0.5 mt-2'>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
