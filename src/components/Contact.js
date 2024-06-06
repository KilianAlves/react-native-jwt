import { Button, Text, View } from "react-native";

export default function Contact({ contact }) {
  return (
    <View>
      <Text>{contact.avatar}</Text>
      <Text>{contact.lastName}</Text>
      <Text>{contact.firstName}</Text>
      <Text>{contact.email}</Text>
      <Text>{contact.phone}</Text>
      <Button title="CALL" />
    </View>
  );
}
