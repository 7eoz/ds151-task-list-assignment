import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import {
	View,
	TextInput,
	TouchableOpacity,
	FlatList,
	FlatListItem,
	Text,
	StyleSheet,
} from 'react-native';

const TaskListScreen = () => {
	const [taskDescription, setTaskDescription] = useState('');
	const [taskItems, setTaskItems] = useState([]);

	const handleAddTask = () => {
		setTaskItems([...taskItems, taskDescription]);
		setTaskDescription('');
	};

	const endTask = (index) => {
		let itemsCopy = [...taskItems];
		itemsCopy.splice(index, 1);
		setTaskItems(itemsCopy);
	};
	return (
		<View>
			<View style={styles.taskListScreen}>
				<TextInput
					autoCapitalize='none'
					autoCorrect={false}
					value={taskDescription}
					style={styles.newTextInput}
					placeholder='Write a task you need to do'
					onChangeText={(t) => setTaskDescription(t)}
				/>
				<View>
					<TouchableOpacity onPress={() => handleAddTask()}>
						<View style={styles.addButton}>
							<Text style={styles.addText}>+</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			{taskItems.map((description, index) => {
				return (
					<TaskItem
						key={index}
						onPress={() => endTask(index)}
						description={description}
					/>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	taskListScreen: {
		flex: 1,
		flexDirection: 'row',
	},
	newTextInput: {
		borderWidth: 1,
		borderColor: 'black',
		margin: 10,
		padding: 5,
		width: '75%',
		height: 24,
	},
	addButton: {
		width: 40,
		height: 40,
		marginTop: 3,
		paddingTop: 4,
		marginLeft: '25%',
		backgroundColor: '#DC143C',
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#C0C0C0',
		borderWidth: 1,
	},
	addText: {
		marginBottom: 10,
		fontSize: 22,
		fontWeight: 'bold',
	},
});

export default TaskListScreen;
