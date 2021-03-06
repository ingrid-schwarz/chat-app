import React from "react";
import Contact from "./Contact";
import "./Contact.css";
import PropTypes from "prop-types";

const users = [
  {
    name: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    online: false
  },
  {
    name: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    online: true
  },
  {
    name: "Vernon Mason",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    online: true
  },
  {
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: false
  },
  {
    name: "Juanita Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    online: true
  }
];

const ContactList = () => (
  <div>
    {users.map((user) => (
      <Contact avatar={user.avatar} name={user.name} online={user.online} />
    ))}
  </div>
);

ContactList.propTypes = {
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired
};

export default ContactList;

