import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./pages/ContactForm.jsx"
import Homepage from "./pages/Homepage.jsx";


export default function Router() {
    return <>
    <BrowserRouter>
        <Routes>
         <Route path="/" element={ <Homepage />} />
         <Route path="/contact" element={ <ContactForm />} />
        </Routes>
    </BrowserRouter>
    </>
}