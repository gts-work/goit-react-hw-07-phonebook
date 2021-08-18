import React from "react";
import { connect } from "react-redux";

import Title from "./components/Title";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";

function App(contacts) {
  console.log("APP ~ contacts: ", contacts);

  return (
    <div className="container">
      <Title title="Phonebook" />
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps)(App);
