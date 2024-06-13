import { View } from "react-native";
import Contact from "../components/Contact";
import Error from "../components/Error";
import { useEffect, useState } from "react";
import { getContactInfo } from "../services/api";
import { useContactContext } from "../hooks/useContactContect";

export default function ContactView({ route }) {
  const { state } = useContactContext();
  const { contact } = route.params;
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    const fetchContactInfo = async () => {
      setContactInfo(await getContactInfo(state.jwtToken, contact.id));
    };
    fetchContactInfo();
  }, [contact, state.jwtToken]);
  console.log("Contact: ", contact);
  console.log("ContactInfo: ", contactInfo);
  return (
    <View>
      <Contact contact={contactInfo} />
      <Error />
    </View>
  );
}
