import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends React.components{
    constructor(name, image, status){
    super(name, image, status);
    this.state = {
        online = false;
        }
    }
    
    render(
        <div className="Contact">
            <p className="name">{contact.name}</p>
            <img className= "avatar" src={contact.image} alt={contact.name}/>
            <div className="status">
                contact.status === true ? "status-online" : "status-offline"}/>
            <p className="status-text">{
            contact.status === true ? "online" : "offline"}</p>
            </div>
        </div>  
    );
    
   Contact.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
    }; 
};


export default Contact;
