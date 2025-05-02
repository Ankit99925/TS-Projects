import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import {PasswordInput,RangeSlider,Checkbox} from './components'


function App() {
  const [length, setLength] = useState<number>(8)
  const [numberAllowed, setNumberAllowed] = useState<boolean>(false)
  const [charAllowed, setCharAllowed] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("")
  const passRef = useRef<HTMLInputElement | null>(null)

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "`#$%&!?"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPass = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 12)
    window.navigator.clipboard.writeText(password)
    alert("Password copied to clipboard!")
  }, [password])

  useEffect(() => {
    passwordGen()
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Password Generator</h1>
        <PasswordInput password={password} passRef={passRef} />
        <RangeSlider length={length} setLength={setLength} />
        <Checkbox
          label="Include Numbers"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <Checkbox
          label="Include Special Characters"
          checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <button
          onClick={copyPass}
          className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600"
        >
          Copy Password
        </button>
      </div>
    </div>
  )
}

export default App
