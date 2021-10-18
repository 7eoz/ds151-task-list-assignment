import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import {
	View,
	TextInput,
	TouchableOpacity,
	button,
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
		<View style={styles.taskListScreen}>
			<View style={styles.taskListInput}>
				<TextInput
					autoCapitalize='none'
					autoCorrect={false}
					value={taskDescription}
					style={styles.newTextInput}
					placeholder='Write a task you need to do'
					onChangeText={(t) => setTaskDescription(t)}
				/>
				<View>
					<View style={styles.addButton}>
						<TouchableOpacity onPress={() => handleAddTask()}>
							<Text style={styles.addText}>+</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.taskListItems}>
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
		</View>
	);
};

const styles = StyleSheet.create({
	taskListScreen: {
		flex: 1,
		flexDirection: 'column',
	},
	taskListInput: {
		flex: 1,
		flexDirection: 'row',
	},
	taskListItems: {
		flex: 2,
		// flexDirection: 'row',
	},
	newTextInput: {
		borderWidth: 1,
		borderColor: 'black',
		marginLeft: 10,
		marginTop: 10,
		paddingLeft: 5,
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
