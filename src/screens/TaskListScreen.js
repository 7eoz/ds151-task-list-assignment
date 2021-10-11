import React, { useState } from 'react';
import {
	View,
	TextInput,
	Button,
	TouchableOpacity,
	FlatList,
	FlatListItem,
	Text,
	StyleSheet,
} from 'react-native';

const TaskListScreen = () => {
	const [text, setText] = useState('');

	return (
		<View>
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				value={text}
				style={styles.textInput}
				placeholder='Write a task you need to do'
				onChangeText={(t) => setText(t)}
			/>
			<Text>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		borderColor: 'black',
		margin: 10,
		padding: 5,
	},
});

export default TaskListScreen;
