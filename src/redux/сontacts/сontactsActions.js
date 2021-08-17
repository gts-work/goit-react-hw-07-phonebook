import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("сontacts/add");
const deleteContact = createAction("сontacts/delete");
const changeFilter = createAction("сontacts/changeFilter");

const fetchContactsRequest = createAction("сontacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("сontacts/fetchContactsSuccess");
const fetchContactsError = createAction("сontacts/fetchContactsError");

export default {
  addContact,
  deleteContact,
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};
