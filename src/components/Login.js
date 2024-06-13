import { View, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";
import { loginAPI } from "../actions/authentification";
import { useContactContext } from "../hooks/useContactContect";
import * as SecureStore from "expo-secure-store";
import { getMe } from "../services/api";
import { style } from "../../App";

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

    if (response.jwt) {
      dispatch({ type: "SET_JWT_TOKEN", payload: response.jwt });
      await SecureStore.setItemAsync("jwtToken", response.jwt);
      const me = await getMe(response.jwt);
      if (me.code === "notfound") {
        navigation.navigate("Register");
      } else {
        navigation.navigate("ContactsList");
      }
    } else {
      console.log("error");
    }
  };
  return (
    <View>
      <TextInput
        placeholder="login"
        value={login}
        onChangeText={setLogin}
        style={style.input}
      />
      <TextInput
        placeholder="Password"
        autoComplete="current-password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={style.input}
      />
      <Button title="Login" onPress={handleLogin} style={style.button} />
    </View>
  );
}
