import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useContactContext } from "../hooks/useContactContect";
import { getMe } from "../services/api";
import { style } from "../../App";
import * as SecureStore from "expo-secure-store";

export default function Menu({ navigation }) {
  const [userInfo, setUserInfo] = useState({});
  const { state, dispatch } = useContactContext();

  const LogOut = () => {
    // Suppression du token
    dispatch({ type: "LOGOUT" });
    // Suppression du refreshtoken dans le stockage
    SecureStore.deleteItemAsync("jwtToken");
    // Redirection vers la page de connexion
    navigation.navigate("Login");
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      setUserInfo(await getMe(state.jwtToken));
    };
    fetchUserInfo();
  }, [state.jwtToken]);

  return (
    <View
      style={{
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
      }}
    >
      <Text>{userInfo.name}</Text>
      <Button title="Deconnexion" onPress={LogOut} />
    </View>
  );
}
