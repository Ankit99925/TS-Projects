import { useId } from "react"

interface InputBoxProps {
  label: string
  amount: string | number
  onAmountChange?: (amount: number) => void
  onCurrencyChange?: (currency: string) => void
  currencyOptions: string[]
  selectCurrency: string
  amountDisable?: boolean
  currencyDisable?: boolean
}

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}: InputBoxProps) => {
  const useID = useId()
  return (
    <div className="space-y-2">
      <label htmlFor={useID} className="block text-gray-700 font-medium">
        {label}
      </label>
      <input
        type="number"
        placeholder="Amount"
        id={useID}
        disabled={amountDisable}
        value={amount}
        onChange={(e) => {
          onAmountChange && onAmountChange(Number(e.target.value))
        }}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
      />
      <label htmlFor="" className="block text-gray-700 font-medium">
        Currency Type
      </label>
      <select
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default InputBox