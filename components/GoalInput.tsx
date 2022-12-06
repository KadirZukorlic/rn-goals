import { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

interface Props {
	onAddGoal: (enteredGoalText: string) => void
}

function GoalInput({ onAddGoal }: Props) {
	const [enteredGoalText, setEnteredGoalText] = useState<string>('')

	const goalInputHandler = (enteredText: string) => {
		setEnteredGoalText(enteredText)
	}

	const addGoalHandler = () => {
		onAddGoal(enteredGoalText)
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder="Your goal"
				onChangeText={goalInputHandler}
			/>
			<Button title="Add Goal" onPress={addGoalHandler} />
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc'
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8
	}
})

export default GoalInput
