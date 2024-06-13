import { View, Text } from "react-native";
import Error from "../components/Error";
import { useContactContext } from "../hooks/useContactContect";
import { getUserContactsList } from "../services/api";
import { useEffect } from "react";
import ContactList from "../components/ContactList";
import Menu from "../components/Menu";

export default function ContactListView({ navigation }) {
  const { state, dispatch } = useContactContext();

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await getUserContactsList(state.jwtToken);
      dispatch({ type: "SET_CONTACT", payload: response });
      return response;
    };
    fetchContacts();
  }, [dispatch, state.jwtToken]);

  const contacts = state.contacts;

  if (contacts === null) {
    return <Text>Loading</Text>;
  }
  // <ContactList contacts={contacts} />
  return (
    <View>
      <Menu navigation={navigation} />
      <ContactList contacts={contacts} navigation={navigation} />
      <Error />
    </View>
  );
}
