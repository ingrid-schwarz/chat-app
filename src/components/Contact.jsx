import React from 'react';
import './Contact.css';
function Contact(contact) {  
    return(
    <div className="Contact">
        <p className="name">{contact.name}</p>
        <img className= "avatar" src={contact.image} alt={contact.name}/>
        <div className="status">
            <div className={
                contact.status === true ? "status-online" : "status-offline"}/>
            <p className="status-text">{
            contact.status === true ? "online" : "offline"}</p>
        </div>  

    </div>);
}
Contact.propTypes={
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
}
export default Contact;


