import { Link } from "react-router-dom"

export default function ContactForm() {
    return <>
    <div className="page">
        <div id="top-line">
    <Link to={"/"}><h1>Lumia</h1></Link> 
    <h3>Kontakta oss</h3>
        </div>
    <form>
        <label>Din email<input type="email"></input></label><br/>
        <label>Ditt meddelande<textarea></textarea></label><br/>
        <input type="submit" id="send" value="Skicka ditt meddelande" />
    </form>
    <br/>
    <br/>
    </div>
    </>
}