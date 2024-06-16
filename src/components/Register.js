import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { registerAPI } from "../actions/authentification";
import { useContactContext } from "../hooks/useContactContect";
import style from "../Style";

export default function Register({ navigation }) {
  const { state } = useContactContext();
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    const response = await registerAPI(username, state.jwtToken);
    if (response.status === 404) {
      setError("Username does not exist");
      console.log("Username does not exist");
    } else {
      navigation.navigate("ContactsList");
    }
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChange={setUsername}
        style={style.input}
      />
      <Button title="Register" onPress={handleRegister} style={style.button} />
    </View>
  );
}
