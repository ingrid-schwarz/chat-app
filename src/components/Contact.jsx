import React from "react";
import "./Contact.css";

class Contact extends React.components{
    constructor(name,avatar){
        super(name, avatar);
        this.state ={
            online: false;
        };
    }
   render(){
       return (
            <div className="Contact">
            <p className="name">{contact.name}</p>
            <img className="avatar" src={contact.avatar} alt={contact.name} />
            <div className="status">
                <div
                className={
                    contact.online === true ? "status-online" : "status-offline"
                }
                />
                <p className="status-text">
                {contact.online === true ? "online" : "offline"}
                </p>
            </div>
            </div>
        ); 
    } 
    
}







export default Contact;
