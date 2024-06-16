import { View, Text, TextInput, Button } from 'react-native';
import style from "../Style";
import { useState } from 'react';
import { updateContact} from '../services/api';
import { useContactContext } from '../hooks/useContactContect';
import { handleRefreshToken } from '../actions/authentification';

export default function EditContact({ navigation, contact }) {
    const { state, dispatch } = useContactContext();

    const id = contact.id;
    const [lastName, setLastName] = useState(contact.lastName);
    const [firstName, setFirstName] = useState(contact.firstName);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);


    const handleEditContact = async() => {
        console.log("edit contact");
        // the function updateContact already json.stringify the contact info
        console.log({ id, lastName, firstName, email, phone });
        const PutRequest = await updateContact(state.jwtToken, { id, lastName, firstName, email, phone });
        if (PutRequest.code === "invalidtoken") {
            navigation.navigate("Login");
            return;
        }
        if (PutRequest.code === "tokenexpired") {
            const response = await handleRefreshToken();
            if (response.ok) {
                const PutRequest = await updateContact(state.jwtToken, { id, lastName, firstName, email, phone });
            } else {
                return;
            }
        }
        const newContact = { id, lastName, firstName, email, phone };
        navigation.navigate("Contact", { contact: newContact });
    };
    return (
        <View>
        <Text>Nom</Text>
        <TextInput placeholder="Nom" value={lastName} onChangeText={setLastName} style={style.input} />
        <Text>Prenom</Text>
        <TextInput placeholder="Prenom" value={firstName} onChangeText={setFirstName} style={style.input} />
        <Text>Email</Text>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={style.input} />
        <Text>Telephone</Text>
        <TextInput placeholder="Telephone" value={phone} onChangeText={setPhone} style={style.input} />
        <Button title="Enregistrer" onPress={handleEditContact} style={style.button} />
        </View>
    );
    }