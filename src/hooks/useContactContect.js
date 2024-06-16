import { useReducer, useContext, createContext } from "react";

export const ContactContext = createContext(null);

// action
const contactReducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACT":
      return { ...state, contacts: action.payload };
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "DELETE_CONTACT":
      return null;
    case "SET_JWT_TOKEN":
      return { ...state, jwtToken: action.payload };
    case "LOGOUT":
      return { ...state, jwtToken: null };
    default:
      return state;
  }
};

// Provider
export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, {
    jwtToken: null,
    contacts: null,
  });

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  const { state, dispatch } = useContext(ContactContext);
  return { state, dispatch };
};
