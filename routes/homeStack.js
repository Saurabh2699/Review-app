import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'

const Stack = createStackNavigator()

function HomeStack() {
    return (
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#ddd',
                    height: 60
                },
                headerTintColor: '#555'
            }}
            >
                <Stack.Screen name='Home' component={Home} 
                    options={({navigation}) => {
                        return {
                            headerTitle: () => <Header navigation={navigation} title=' My Review App' />
                        }
                    }}
                />
                <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{
                    title: 'Review Details',
                }}/>
            </Stack.Navigator>
    )
}

export default HomeStack