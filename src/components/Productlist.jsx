import Productbox from "./Productbox"
import { useState } from "react"

const lampData = await fetch("http://localhost:3000/lamps")
const lamps = await lampData.json()

export default function() {
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(e) {
      setSearchTerm(e.target.value)
    }

    const filteredItems = lamps.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return <>
    <input id="search" type="search" placeholder="Type to search" onChange={handleChange}></input>
    {filteredItems.map(filteredItem => <Productbox {...filteredItem} key={filteredItem.id}/>) }
    </>
}