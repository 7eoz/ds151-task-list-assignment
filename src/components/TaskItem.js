import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ description }) => {
	const [done, setDone] = useState(true);

	return (
		<View style={styles.taskContainer}>
			<TouchableOpacity onPress={() => setDone((prevDone) => !prevDone)}>
				{done ? (
					<Text style={styles.todo}>{description}</Text>
				) : (
					<Text style={styles.done}>{description}</Text>
				)}
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	taskContainer: {
		borderWidth: 1,
	},
	todo: {
		fontSize: 24,
		fontWeight: 'bold',
		marginLeft: 10,
	},
	done: {
		fontSize: 24,
		fontWeight: '300',
		marginLeft: 10,
		textDecorationLine: 'line-through',
	},
});

export default TaskItem;
