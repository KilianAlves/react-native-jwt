import { View, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";
import { loginAPI } from "../actions/authentification";
import { useContactContext } from "../hooks/useContactContect";
import * as SecureStore from "expo-secure-store";

export default function Login({ navigation }) {
  const [login, setLogin] = useState("c");
  const [password, setPassword] = useState("c");

  const { state, dispatch } = useContactContext();

  // useEffect pour obtenir le refreshToken et permettre de se co automatiquement
  useEffect(() => {
    const getJwtToken = async () => {
      const jwtToken = await SecureStore.getItemAsync("jwtToken");
      if (jwtToken) {
        dispatch({ type: "SET_JWT_TOKEN", payload: jwtToken });
        navigation.navigate("ContactsList");
      }
    };
    console.log("useEffect");
    getJwtToken();
  }, []);

  const handleLogin = async () => {
    const response = await loginAPI({ login, password });
    console.log("response");
    console.log("handleLogin =>", response);

    if (response.error) {
      console.log("error");
    } else {
      dispatch({ type: "SET_JWT_TOKEN", payload: response.jwt });
      await SecureStore.setItemAsync("jwtToken", response.jwt);
      navigation.navigate("ContactsList");
    }
  };
  return (
    <View>
      <TextInput placeholder="login" value={login} onChangeText={setLogin} />
      <TextInput
        placeholder="Password"
        autoComplete="current-password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
