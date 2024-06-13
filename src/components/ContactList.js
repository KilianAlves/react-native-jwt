import { ScrollView } from "react-native";
import { Link } from "@react-navigation/native";
import Contact from "./Contact";

export default function ContactList({ contacts }) {
  const contactsList = contacts.map((contact) => {
    return (
      <Link
        key={contact.id}
        to={{ screen: "Contact", params: { contact: contact } }}
      >
        {contact.firstName}
      </Link>
    );
  });

  return <ScrollView>{contactsList}</ScrollView>;
}
