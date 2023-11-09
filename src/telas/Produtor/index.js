import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";

export default function Produtor() {
    const route = useRoute();
    console.log('route', route)
    return <Text>Produtor</Text>
}