import { useCallback, useEffect, useState } from 'react'
import './App.css'
import words from "./wordList.json"
import {HangmanDrawing,HangmanKeyboard,HangmanWord} from "./components"


function App() {
  const wordFromList=()=>{
    return words[Math.floor(Math.random()*words.length)]
  }
  const [word,setWord]= useState<string>(wordFromList());
  const [guessedLetter,setGuessedLetter]=useState<string[]>([]);
 const incorrectLetters=guessedLetter.filter((letter)=>!word.includes(letter))

  

  const isLoser= incorrectLetters.length>=6;
  const isWinner=word.split("").every(letter=>guessedLetter.includes(letter))
   
  const addGuessedLetter=useCallback((letter:string)=>{
     if(guessedLetter.includes(letter)||isLoser||isWinner) return

    setGuessedLetter(currentLetters=>[...currentLetters,letter])
  },[guessedLetter,isLoser,isWinner])
  useEffect(()=>{
    const handler=(e:KeyboardEvent)=>{
      const key= e.key;
      if(!key.match(/^[a-z]$/)) return
      e.preventDefault();
      addGuessedLetter(key);
    }
    document.addEventListener("keypress",handler)

    return ()=>{
      document.removeEventListener("keypress",handler)
    }
  },[addGuessedLetter])
   useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetter([])
      setWord(wordFromList())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])


 
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        <h1 className='text-4xl'>Hangman</h1>
        <div style={{ fontSize: "2rem", textAlign: "center" }}>
          {isWinner && "Winner! - Refresh to try again"}
          {isLoser && "Nice Try - Refresh to try again"}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord
          reveal={isLoser}
          guessedLetter={guessedLetter}
          word={word}
        />
        <HangmanKeyboard
          disabled={isLoser || isWinner}
          activeLetter={guessedLetter.filter(letter => word.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </>
  )
}

export default App
