import { View, StyleSheet } from "react-native";
import Error from "../components/Error";
import Login from "../components/Login";

export default function LoginView({ navigation }) {
  return (
    <View style={style.container}>
      <Login navigation={navigation} />
      <Error />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
