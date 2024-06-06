import { ScrollView } from "react-native";
import Contact from "./Contact";

export default function ContactList({ contacts }) {
  const contactsList = contacts.map((contact) => {
    return <Contact key={contact.id} contact={contact} />;
  });

  return <ScrollView>{contactsList}</ScrollView>;
}
