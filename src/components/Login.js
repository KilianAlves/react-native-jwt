import { View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Login({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("login");
    navigation.navigate("ContactsList");
  };
  return (
    <View>
      <TextInput placeholder="login" />
      <TextInput
        placeholder="Password"
        autoComplete="current-password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
