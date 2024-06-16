import { View } from 'react-native';
import AddContact from '../components/AddContact';
import Error from '../components/Error';
import Menu from '../components/Menu';
import style from '../Style';

export default function AddContactView({ navigation }) {
    return (
        <View style={style.view}>
        <Menu navigation={navigation} />
        <AddContact navigation={navigation} />
        <Error />
        </View>
    );
}