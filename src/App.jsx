import './App.css'
import Router from './router.jsx'
import { GlobalProvider } from "./GlobalContext.jsx"


function App() {

  return <>
    <GlobalProvider>
      <Router/>
    </GlobalProvider>
    </>
}

export default App
