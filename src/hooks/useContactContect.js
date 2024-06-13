import { useReducer, useContext, createContext } from "react";

export const ContactContext = createContext(null);

// action
const contactReducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACT":
      return { ...state, contacts: action.payload };
    case "ADD_CONTACT":
      return { ...state.contact, [action.payload.id]: action.payload };
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

  // useEffect(() => {
  //   const fetchContact = async () => {
  //     const response = await getAdminContactsList();
  //     dispatch({ type: "SET_CONTACT", payload: response });
  //   };

  //   // const fetchJwtToken = async () => {
  //   //   const response = await getJwtToken();
  //   //   dispatch({ type: "SET_JWT_TOKEN", payload: response });
  //   // };
  //   fetchContact();  };

  //   // fetchJwtToken();
  // }, []);

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
