import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

interface Props {
	onAddGoal: (enteredGoalText: string) => void
	modalVisible: boolean
	closeModal: () => void
}

function GoalInput({ onAddGoal, modalVisible, closeModal }: Props) {
	const [enteredGoalText, setEnteredGoalText] = useState<string>('')

	const goalInputHandler = (enteredText: string) => {
		setEnteredGoalText(enteredText)
	}

	// Pass enteredGoalText to app.tsx
	const addGoalHandler = () => {
		onAddGoal(enteredGoalText)
		setEnteredGoalText('')
	}

	return (
		<Modal visible={modalVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your goal"
					value={enteredGoalText}
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={closeModal} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 24,
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc'
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '100%',
		padding: 8
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row'
	},
	button: {
		width: 100,
		marginHorizontal: 8
	}
})

export default GoalInput
