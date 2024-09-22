import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.formList} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name :"
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="tel"
        name="number"
        placeholder="Phone number :"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;