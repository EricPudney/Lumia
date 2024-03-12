import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export default function Productbox(props) {
    const {cart, setCart, setShowPopup} = useContext(GlobalContext)

    function handleClick() {
        setCart([...cart, {"name": `${props.name}`, "cost": parseInt(props.cost), "id": cart.length}]);
        setShowPopup(true);
    }    

    return <>
    <div className="product">
        <div className="product-info">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <button value="buy" onClick={ handleClick }>Köp för {props.cost} kr</button>
        </div>
        <img src={props.image}></img>
    </div>
    </>
}