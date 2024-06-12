import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "./src/views/LoginView";
import ContactListView from "./src/views/ContactListView";
import ContactView from "./src/views/ContactView";
import { ContactProvider } from "./src/hooks/useContactContect";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ContactProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen name="ContactsList" component={ContactListView} />
          <Stack.Screen name="Contact" component={ContactView} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
