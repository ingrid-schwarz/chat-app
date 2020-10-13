import React from 'react';
import './Contact.css';
// Variables
// let Contact = {
//   name = 
//   avatar = <img src="" />,
//   online = true / false;
//  isOnline = <p">{online ? 'online' : 'offline'}</p>,
//  isOText = 
//  }
// declaration Contact.name ="X"

function Contact() {
    return <div class="Contact"><img  class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg" alt ="connard de lecteur d'écran"/>
    <h3 class="name">Lucas Fernandez</h3>
        <div class="status">
            <div class="status-online"></div>
            <p class="status-text">Online</p>
        </div>
    </div>
}
export default Contact;
