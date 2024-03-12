import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

function GlobalProvider({children}) {

    const [cart, setCart] = useState([])
    const [showPopup, setShowPopup] = useState(false)


    return <GlobalContext.Provider value={ { cart, setCart, showPopup, setShowPopup } }>
        {children}
    </GlobalContext.Provider>

}

export { GlobalContext, GlobalProvider }