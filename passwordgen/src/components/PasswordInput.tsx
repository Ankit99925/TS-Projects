interface PasswordInputProps {
  password: string
  passRef: React.RefObject<HTMLInputElement|null>
}

const PasswordInput = ({ password, passRef }: PasswordInputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Generated Password</label>
      <input
        type="text"
        value={password}
        ref={passRef}
        readOnly
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default PasswordInput
