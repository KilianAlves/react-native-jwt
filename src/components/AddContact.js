import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { postContact } from "../services/api";
import { useContactContext } from "../hooks/useContactContect";
import style from "../Style";

export default function AddContact({ navigation }) {
    const [firstName, setFirstName] = useState("Eobard");
    const [lastName, setLastName] = useState("Thawn");
    const [email, setEmail] = useState("EobardThawn@starlabs.com");
    const [phone, setPhone] = useState("0666522045");
    const { state, dispatch } = useContactContext();
    
    const addContact = async () => {
        try {
        const newContact = await postContact(state.jwtToken, { firstName, lastName, email, phone });
        dispatch({ type: "ADD_CONTACT", payload: newContact });
        console.log("newcontacts : ",newContact)
        navigation.navigate("ContactsList");
        } catch (error) {
        }
    };
    
    return (
        <View>
        <Text style={style.title}>Add Contact</Text>
        <TextInput
            style={style.input}
            placeholder="prenom"
            value={firstName}
            onChangeText={setFirstName}
        />
        <TextInput
            style={style.input}
            placeholder="nom"
            value={lastName}
            onChangeText={setLastName}
        />
        <TextInput
            style={style.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={style.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
        />
        <Button title="Add" onPress={addContact} />
        </View>
    );
    }