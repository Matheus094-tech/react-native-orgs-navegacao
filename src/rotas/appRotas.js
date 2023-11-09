import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProdutorRotas from './produtorRotas';
import MelhoresProdutoresRotas from './melhoresProdutoresRotas';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={ProdutorRotas} />
            <Tab.Screen name="Melhores produtores" component={MelhoresProdutoresRotas} />
        </Tab.Navigator>
    </NavigationContainer>
}