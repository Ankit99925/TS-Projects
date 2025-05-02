type wordProp={
    guessedLetter:string[];
    word:string;
    reveal?:boolean
}
const HangmanWord = ({guessedLetter,word,reveal=false}:wordProp) => {
  return (
    <div  style={{
        display: "flex",
        justifyContent: "center",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}> {word.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetter.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetter.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}</div>
   
   
  )

}

export default HangmanWord