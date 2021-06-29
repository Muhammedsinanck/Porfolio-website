import { useState } from "react"
import "./contact.scss"
export default function Contact()
{   
    const [message,setMessage] = useState(false);
    const handleSubmit=(e)=>{
         e.preventDefault();
         setMessage(true);
    }
    return( 
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" />
                <textarea placeholder="Message"/>
                <button type="submit">Send</button>
                {message&& <span>thanks, I will reply ASAP</span>}
            </form>
        </div>
    )
}