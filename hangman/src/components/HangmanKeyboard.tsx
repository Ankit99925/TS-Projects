const rows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

interface keyboardProps {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
}

const HangmanKeyboard = ({ activeLetter, inactiveLetters, addGuessedLetter, disabled = false }: keyboardProps) => {
  return (
    <div className="keyboard-container" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "2rem" }}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
          {row.map((key) => {
            const isActive = activeLetter.includes(key);
            const isInActive = inactiveLetters.includes(key);
            return (
              <button
                key={key}
                onClick={() => addGuessedLetter(key)}
                className={`keyboard-button ${isActive ? "active" : ""} ${isInActive ? "inactive" : ""}`}
                style={{
                  padding: "0.75rem",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  backgroundColor: isActive ? "green" : isInActive ? "gray" : "white",
                  color: isActive || isInActive ? "white" : "black",
                  border: "2px solid black",
                  borderRadius: "8px",
                  cursor: disabled || isActive || isInActive ? "not-allowed" : "pointer",
                  width: "40px",
                  height: "40px",
                  textAlign: "center",
                }}
                disabled={isActive || isInActive || disabled}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default HangmanKeyboard