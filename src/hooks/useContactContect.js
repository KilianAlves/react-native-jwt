import { useReducer, useContext, createContext } from "react";

const ContactContext = createContext();

const contactReducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACT":
      return { ...state, contacts: action.payload };
    case "ADD_CONTACT":
      return { ...state.contact, [action.payload.id]: action.payload };
    case "DELETE_CONTACT":
      return null;
    default:
      return state;
  }
};
