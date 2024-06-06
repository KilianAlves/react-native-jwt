import { getAdminContactsList } from "../services/api";
import { View } from "react-native";
import ContactList from "../components/ContactList";
import Error from "../components/Error";

export default function ContactListView({ navigation }) {
  const contacts = async () => {
    await getAdminContactsList();
  };

  return (
    <View>
      <ContactList contacts={contacts} />
      <Error />
    </View>
  );
}
