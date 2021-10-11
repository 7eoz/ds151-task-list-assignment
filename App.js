import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import TaskListScreen from './src/screens/TaskListScreen';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='Task List' component={TaskListScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
