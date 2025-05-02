interface CheckboxProps {
  label: string
  checked: boolean
  onChange: () => void
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <label className="text-gray-700">{label}</label>
    </div>
  )
}

export default Checkbox
