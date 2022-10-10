import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';
import Level1 from './src/screens/MatchPuzzle/Level1';
const Stack = createNativeStackNavigator();
import { enableScreens } from 'react-native-screens'
import Level2 from './src/screens/MatchPuzzle/Level2';
import Level3 from './src/screens/Level3';
import Level4 from './src/screens/Level4';
import Level5 from './src/screens/Level5';
import Level6 from './src/screens/Level6';
import Level7 from './src/screens/Level7';
import Level8 from './src/screens/Level8';
import Level9 from './src/screens/Level9';
import Level10 from './src/screens/Level10';
enableScreens()
const Nav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="App" component={App} />
                <Stack.Screen name="Level1" component={Level1} />
                <Stack.Screen name="Level2" component={Level2} />
                <Stack.Screen name="Level3" component={Level3} />
                <Stack.Screen name="Level4" component={Level4} />
                <Stack.Screen name="Level5" component={Level5} />
                <Stack.Screen name="Level6" component={Level6} />
                <Stack.Screen name="Level7" component={Level7} />
                <Stack.Screen name="Level8" component={Level8} />
                <Stack.Screen name="Level9" component={Level9} />
                <Stack.Screen name="Level10" component={Level10} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Nav