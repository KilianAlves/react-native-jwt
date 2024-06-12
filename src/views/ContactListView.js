import { View } from "react-native";
import ContactList from "../components/ContactList";
import Error from "../components/Error";
import { useContactContext } from "../hooks/useContactContect";

export default function ContactListView({ navigation }) {
  const { state, dispatch } = useContactContext();

  const contacts = state.contacts;
  return (
    <View>
      <ContactList contacts={contacts} />
      <Error />
    </View>
  );
}
