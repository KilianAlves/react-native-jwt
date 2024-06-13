import { View } from "react-native";
import Register from "../components/Register";
import Error from "../components/Error";

export default function RegisterView({ navigation }) {
  return (
    <View>
      <Register navigation={navigation} />
      <Error />
    </View>
  );
}
