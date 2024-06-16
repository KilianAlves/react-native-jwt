import { Text, TextInput, View } from "react-native";
import Menu from "../components/Menu";
import style from "../Style";
import Error from "../components/Error";
import EditContact from "../components/EditContact";

export default function EditContactView({route, navigation}) {
  const { contact } = route.params;
  return (
  <View style={style.view}>
    <Menu navigation={navigation} />
    <EditContact contact={contact} navigation={navigation}/>
    <Error />
  </View>
);
}
