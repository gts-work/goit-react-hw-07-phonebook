import axios from "axios";
import API_DATA from "./settings";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "../redux/сontacts/сontactsActions";

// const instance = axios.create();
// instance.defaults.baseURL = API_DATA.BASE_URL;
// const contactsList = API_DATA.DATA_QUERY.CONTACTS_LIST;

axios.defaults.baseURL = "http://localhost:4040";

async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  console.log("fetchContacts ~ data === >>>  ", data);

  return data;
}

async function fetchAddContacts(contact) {
  const { data } = await axios.post("/contacts", contact);
  console.log("fetchAddContacts ~ data === >>>  ", data);

  return data;
}

async function fetchDeleteContacts(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  console.log("fetchDeleteContacts ~ data === >>>  ", data);

  return data;
}

export default { fetchContacts, fetchAddContacts, fetchDeleteContacts };
