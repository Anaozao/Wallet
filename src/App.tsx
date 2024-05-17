import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Wallet from "./pages/Wallet/Wallet"
import { useEffect } from "react"
import { currenciesNames } from "./redux/actions/actions"
import { useDispatch } from "react-redux"
import { Dispatch } from "./types"

function App() {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(currenciesNames())
  })

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/wallet" element={<Wallet />}/>
    </Routes>
  )
}

export default App
