import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../telas/home';
import Produtor from '../telas/Produtor';

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({ componentePrincipal = Home }) {
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={componentePrincipal} />
        <Stack.Screen name="Produtor" component={Produtor} />
    </Stack.Navigator>
}