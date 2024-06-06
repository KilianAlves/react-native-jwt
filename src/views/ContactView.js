import { View } from "react-native";
import Contact from "../components/Contact";
import Error from "../components/Error";

export default function ContactView({ navigation }) {
  return (
    <View>
      <Contact />
      <Error />
    </View>
  );
}
