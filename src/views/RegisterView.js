import { View } from "react-native";
import Register from "../components/Register";
import Error from "../components/Error";
import style from "../Style";

export default function RegisterView({ navigation }) {
  return (
    <View style={style.view} >
      <Register navigation={navigation} />
      <Error />
    </View>
  );
}
