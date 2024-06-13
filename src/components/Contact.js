import { Button, Text, View, Image } from "react-native";

export default function Contact({ contact }) {
  console.log("ContactCard : ", contact);
  return (
    <View>
      <Image source={{ uri: contact.avatar }} width={50} height={50} />
      <Text>{contact.lastName}</Text>
      <Text>{contact.firstName}</Text>
      <Text>{contact.email}</Text>
      <Text>{contact.phone}</Text>
      <Button title="CALL" />
    </View>
  );
}
