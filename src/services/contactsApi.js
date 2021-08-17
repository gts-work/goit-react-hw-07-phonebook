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

async function fetchContactsApi() {
  const { data } = await axios.get("/contacts");
  console.log("fetchContactsApi ~ data === >>>  ", data);

  return data;
}

export default fetchContactsApi;
