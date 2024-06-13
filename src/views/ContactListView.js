import { View, Text } from "react-native";
import Error from "../components/Error";
import { useContactContext } from "../hooks/useContactContect";
import { getUserContactsList } from "../services/api";
import { useEffect } from "react";
import ContactList from "../components/ContactList";

export default function ContactListView({ navigation }) {
  const { state, dispatch } = useContactContext();

  useEffect(() => {
    console.log("fetching contacts");
    const fetchContacts = async () => {
      const response = await getUserContactsList(state.jwtToken);
      console.log("response : ", response);
      dispatch({ type: "SET_CONTACT", payload: response });
      return response;
    };
    fetchContacts();
  }, [dispatch, state.jwtToken]);

  const contacts = state.contacts;
  console.log("Contacts: ", contacts);

  if (contacts === null) {
    return <Text>Loading</Text>;
  }
  // <ContactList contacts={contacts} />
  return (
    <View>
      <ContactList contacts={contacts} />
      <Error />
    </View>
  );
}
