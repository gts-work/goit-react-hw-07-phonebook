import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import contactsOperations from "../../redux/сontacts/contactsOperations";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const getVisibleContacts = (allContacts, filter) => {
    console.log("getVisibleContacts ~ allContacts ==> ", allContacts);
    console.log("getVisibleContacts ~ filter ==> ", filter);

    const normalizedFilter = filter.toLowerCase();
    console.log("getVisibleContacts ~ normalizedFilter ==> ", normalizedFilter);

    const getAllContacts = allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    console.log("allContacts ~ getAllContacts ==>  ", getAllContacts);

    return getAllContacts;
  };

  const contacts = useSelector((state) =>
    getVisibleContacts(state.contacts.items, state.contacts.filter)
  );

  console.log("ContactsList ~ contacts: ", contacts);

  return (
    <div>
      <h3>Contacts</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, number }) => (
            <ContactItem id={id} name={name} number={number} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

ContactsList.defaultProps = {
  onDelete: () => {},
  contacts: PropTypes.shape({
    id: "",
    name: "",
    number: 0,
  }),
};

ContactsList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
  }),
  onDelete: PropTypes.func,
};

export default ContactsList;
