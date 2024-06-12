import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { loginAPI } from "../actions/authentification";
import { useContactContext } from "../hooks/useContactContect";

export default function Login({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContactContext();

  const handleLogin = async () => {
    const response = await loginAPI(login, password);
    console.log("response");
    console.log(response);

    if (response.error) {
      console.log("error");
    } else {
      dispatch({ type: "SET_JWT_TOKEN", payload: response.jwt });
      navigation.navigate("ContactsList");
    }
  };
  return (
    <View>
      <TextInput placeholder="login" onChangeText={setLogin} />
      <TextInput
        placeholder="Password"
        autoComplete="current-password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
