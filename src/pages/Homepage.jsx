import Contact from '../components/Contact'
import Productlist from '../components/Productlist'
import Popup from '../components/Popup'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from "../GlobalContext";

export default function Homepage() {

  const { showPopup, setShowPopup } = useContext(GlobalContext)

  function handleClick(e) {
    if (e.target.value !== "buy") {
      setShowPopup(false)
    }
  }
  const [opacity, setOpacity] = useState("page")
  useEffect(() => {setOpacity(showPopup===true ? "page-transp" : "page")}, [showPopup])

    return <>
    <div className={opacity} onClick={handleClick}>
     <Contact />
     <Productlist />
     { showPopup && <Popup /> }
     </div>
     </>

}