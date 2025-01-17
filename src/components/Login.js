import { View, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";
import { loginAPI } from "../actions/authentification";
import { useContactContext } from "../hooks/useContactContect";
import * as SecureStore from "expo-secure-store";
import { getMe } from "../services/api";
import style from "../Style";

export default function Login({ navigation }) {
  const [login, setLogin] = useState("c");
  const [password, setPassword] = useState("c");

  const { state, dispatch } = useContactContext();

  // useEffect pour obtenir le refreshToken et permettre de se co automatiquement
  useEffect(() => {
    const getJwtToken = async () => {
      // recupère le refreshToken
      const jwtToken = await SecureStore.getItemAsync("jwtToken");
      // si le refreshToken n'est pas null
      if (jwtToken) {
        // recupère le jwtToken à partir du refreshToken
        jwtFromRefresh = await loginAPI({ refreshToken: jwtToken });
        // Verification si le refreshToken est valide
        if (jwtFromRefresh.error === "wrongrefresh") {
          // si le refreshToken n'est pas valide on le supprime  & on retourne au login
          await SecureStore.deleteItemAsync("jwtToken");
          navigation.navigate("Login");
          return;
        }
        dispatch({ type: "SET_JWT_TOKEN", payload: jwtFromRefresh.jwt });
        navigation.navigate("ContactsList");
      }
    };
    getJwtToken();
  }, []);

  const handleLogin = async () => {
    const response = await loginAPI({ login, password });
    console.log("response");
    console.log("handleLogin =>", response);

    if (response.jwt) {
      dispatch({ type: "SET_JWT_TOKEN", payload: response.jwt });
      await SecureStore.setItemAsync("jwtToken", response.refreshToken);
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
