interface RangeSliderProps {
  length: number
  setLength: (value: number) => void
}

const RangeSlider = ({ length, setLength }: RangeSliderProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Password Length: {length}</label>
      <input
        type="range"
        min={6}
        max={12}
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="w-full"
      />
    </div>
  )
}

export default RangeSlider
