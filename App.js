import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "./src/views/LoginView";
import ContactListView from "./src/views/ContactListView";
import ContactView from "./src/views/ContactView";
import { ContactProvider } from "./src/hooks/useContactContect";
import RegisterView from "./src/views/RegisterView";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ContactProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen name="ContactsList" component={ContactListView} />
          <Stack.Screen name="Contact" component={ContactView} />
          <Stack.Screen name="Register" component={RegisterView} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactProvider>
  );
}
