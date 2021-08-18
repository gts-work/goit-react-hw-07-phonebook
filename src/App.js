import React from "react";

import Title from "./components/Title";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";

function App() {
  return (
    <div className="container">
      <Title title="Phonebook" />
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
}

export default App;
