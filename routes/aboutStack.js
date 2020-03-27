import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/about'
import Header from '../shared/header'

const Stack = createStackNavigator()

function AboutStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#ddd',
                height: 60
            },
            headerTintColor: '#555'
        }}
        >
            <Stack.Screen name='About' component={About} 
                options={({ navigation }) => {
                    return {
                        headerTitle: () => <Header navigation={navigation} title='About Review App'/>
                    }
                }} 
            />
        </Stack.Navigator>
    )
}

export default AboutStack