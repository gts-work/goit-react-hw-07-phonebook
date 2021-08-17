import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actionContacts from "./сontactsActions";

function checkGetNewContact(state, payload) {
  console.log("checkGetNewContact payload  ==>> ", payload);

  const isEqualName = (payload) => {
    // console.log("EQUAL ADD: ", payload);
    // console.log("EQUAL ADD: ", payload.text.name);
    return state.find(({ name }) => name === payload.name);
  };

  if (!isEqualName(payload)) {
    // console.log("items ~ payload ==>  ", payload);
    const newContacts = [payload, ...state];
    // console.log("items ~ newContacts ==>  ", newContacts);

    return newContacts;
  } else {
    alert(`${payload.name} is already in contacts`);
    return state;
  }
}

const items = createReducer([], {
  [actionContacts.fetchContactsSuccess]: (state, { payload }) => payload,
  // [actionContacts.fetchContactsSuccess]: (state, { payload }) =>
  //     checkGetNewContact(state, payload),
  // [fetchTodosSuccess]: (state, { payload }) => payload,
});

const filter = createReducer("", {
  [actionContacts.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({ items, filter });
