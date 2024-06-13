import { Button, Text, View, Image } from "react-native";
import { style } from "../../App";

export default function Contact({ contact }) {
  console.log("ContactCard : ", contact);
  return (
    <View style={style.container}>
      <Image source={{ uri: contact.avatar }} width={50} height={50} />
      <Text>{contact.lastName}</Text>
      <Text>{contact.firstName}</Text>
      <Text>{contact.email}</Text>
      <Text>{contact.phone}</Text>
      <Button title="CALL" />
    </View>
  );
}
