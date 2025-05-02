import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState<string>("")
  const [from, setFrom] = useState<string>("inr")
  const [to, setTo] = useState<string>("jpy")
  const [convertedAmount, setConvertedAmount] = useState<number>(0)
  const currData = useCurrencyInfo(from)

  const currencyOptions = Object.keys(currData || {})
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(Number(amount))
    setAmount(convertedAmount.toString())
  }

  const convert = () => {
    const amt = parseFloat(amount)
    if (currData?.[to] && !isNaN(amt)) {
      setConvertedAmount(amt * currData[to])
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
          className="space-y-6"
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={currencyOptions}
            onAmountChange={(amount) => setAmount(amount.toString())}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
          />
          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
            >
              SWAP
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={currencyOptions}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            currencyDisable={false}
            amountDisable={true}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

