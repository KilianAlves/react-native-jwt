import { View, StyleSheet } from "react-native";
import Error from "../components/Error";
import Login from "../components/Login";
import style from "../Style";

export default function LoginView({ navigation }) {
  return (
    <View style={style.view}>
      <Login navigation={navigation} />
      <Error />
    </View>
  );
}
