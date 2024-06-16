import { View } from "react-native";
import Contact from "../components/Contact";
import Error from "../components/Error";
import { useEffect, useState } from "react";
import { getContactInfo } from "../services/api";
import { useContactContext } from "../hooks/useContactContect";
import Menu from "../components/Menu";
import style from "../Style";

export default function ContactView({ route, navigation }) {
  const { state } = useContactContext();
  const { contact } = route.params;
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    const fetchContactInfo = async () => {
      setContactInfo(await getContactInfo(state.jwtToken, contact.id));
    };
    fetchContactInfo();
  }, [contact, state.jwtToken]);
  return (
    <View style={style.view}>
      <Menu navigation={navigation} />
      <Contact contact={contactInfo} navigation={navigation} />
      <Error />
    </View>
  );
}
