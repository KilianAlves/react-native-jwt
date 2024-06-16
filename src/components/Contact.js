import { Button, Text, View, Image } from "react-native";
import style from "../Style";

export default function Contact({ contact, navigation }) {
  // console.log("ContactCard : ", contact);

  const editButton = () => {
    navigation.navigate("Edit", { contact: contact });
  };

  return (
    <View style={{
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
      elevation: 2, // For Android shadow effect
    }}>
      <Image source={{ uri: contact.avatar }} width={50} height={50} />
      <Text>{contact.lastName}</Text>
      <Text>{contact.firstName}</Text>
      <Text>{contact.email}</Text>
      <Text>{contact.phone}</Text>
      <Button title="CALL" />
      <Button title="Edit" onPress={editButton}/>
    </View>
  );
}
