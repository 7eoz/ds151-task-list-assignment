import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
	return (
		<View>
			<Button
				title='Go to Task List'
				onPress={() => navigation.navigate('Task List')}
			/>
		</View>
	);
}

export default HomeScreen;
