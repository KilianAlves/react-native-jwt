import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "./src/views/LoginView";
import ContactListView from "./src/views/ContactListView";
import ContactView from "./src/views/ContactView";
import { ContactProvider } from "./src/hooks/useContactContect";
import RegisterView from "./src/views/RegisterView";
import { StyleSheet } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ContactProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen
            name="ContactsList"
            component={ContactListView}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Contact" component={ContactView} />
          <Stack.Screen name="Register" component={RegisterView} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactProvider>
  );
}

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
