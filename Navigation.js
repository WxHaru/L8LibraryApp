import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ title: 'My Library' }} />
                <Stack.Screen name='Add' component={Add} options={{ title: 'Add New Book' }} />
                <Stack.Screen name='Edit' component={Edit} options={{ title: 'Edit Book' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
