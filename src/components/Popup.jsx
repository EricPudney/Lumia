import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import CartItem from "./CartItem.jsx";

export default function Popup() {
    const { cart } = useContext(GlobalContext)
    let totalCost = cart.reduce((n, {cost}) => n + cost, 0)
    return <>
    <div id="cart">
        <h2>Varukorg</h2>
        {cart.map((item) => <CartItem {...item} key={item.id}/> )}
        <hr/>
        <span>Total cost:</span><span className="cart-right">{totalCost}</span>
    </div>
    </>
}
