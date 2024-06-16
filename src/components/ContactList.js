import { Button, ScrollView, Text } from "react-native";
import { Link } from "@react-navigation/native";

export default function ContactList({ navigation, contacts }) {
  if (contacts == null) {
    return <Text>Loading...</Text>;
  }
  const addContact = () => {
    navigation.navigate("Add");
  };

  const contactsList = contacts.map((contact) => {
    return (
      <Link
        key={contact.id}
        to={{ screen: "Contact", params: { contact: contact } }}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#ccc', // Adds a light grey color to the border for subtlety
          paddingVertical: 15, // Increases vertical padding for better touch targets
          paddingHorizontal: 10, // Keeps horizontal padding moderate
          backgroundColor: '#f9f9f9', // A light background color to distinguish each item
          marginVertical: 5, // Adds space between items
          borderRadius: 5, // Rounds the corners for a more modern look
          shadowColor: '#000', // Adds a shadow for depth, enhancing the card-like feel
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2, // Increases the shadow on Android
        }}
      >
        {contact.firstName}
      </Link>
    );
  });

  return <ScrollView>
    {contactsList}
    <Button title="Ajouter un contact" onPress={addContact} />
  </ScrollView>;
}
