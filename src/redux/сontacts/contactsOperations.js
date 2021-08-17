import contactsAction from "../../redux/сontacts/сontactsActions";
import fetchContactsApi from "../../services/contactsApi";

console.log("fetchContactsApi ==>>  ", fetchContactsApi());

const fetchContacts = () => async (dispath) => {
  dispath(contactsAction.fetchContactsRequest());

  try {
    const contacts = await fetchContactsApi();
    console.log("fetchContacts ~ contacts  === >>>   ", contacts);
    dispath(contactsAction.fetchContactsSuccess(contacts));
  } catch (error) {
    console.log("fetchContacts ~ error  ==>>  ", error);
    dispath(contactsAction.fetchContactsError(error));
  }
};

export default fetchContacts;
