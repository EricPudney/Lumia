export default function({name, cost}) {
    return <>
        <span>{name}</span><span className="cart-right">{cost}</span><br/>
    </>
}