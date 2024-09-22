import React, { useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

function App() {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
    { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
    { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
    { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  // Funcție pentru adăugarea unui nou contact
  const addContact = (name, number) => {
    const duplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (duplicate) {
      alert(`${name} is already in the contact list.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([...contacts, newContact]);
  };

  // Funcție pentru ștergerea unui contact
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  // Funcție pentru schimbarea filtrului
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Funcție pentru returnarea contactelor filtrate
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;