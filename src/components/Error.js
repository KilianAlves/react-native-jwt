import { View, Text } from "react-native";

export default function Error({ error }) {
  return (
    <View>
      <Text>Error</Text>
      <View style={{
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        margin: 10,
       }} >
      <Text>{error}</Text>
      </View>
    </View>
  );
}
