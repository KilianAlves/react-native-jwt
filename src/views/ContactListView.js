import { View, Text } from "react-native";
import Error from "../components/Error";
import { useContactContext } from "../hooks/useContactContect";
import { getUserContactsList } from "../services/api";
import { useEffect } from "react";
import ContactList from "../components/ContactList";
import Menu from "../components/Menu";
import style from "../Style";

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

  console.log("contacts => => ", contacts);
  console.log("state contact => => ", state.contacts)

  if (contacts === null) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={style.view} >
      <Menu navigation={navigation} />
      <ContactList contacts={contacts} navigation={navigation} />
      <Error />
    </View>
  );
}
