import { useState } from 'react'
import { StyleSheet, Button, View, FlatList } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export interface GoalList {
	text: string
	id: string
}

export default function App() {
	const [goalList, setGoalList] = useState<GoalList[]>([])
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

	const openModal = () => setIsModalVisible(true)
	const closeModal = () => setIsModalVisible(false)

	const addGoalHandler = (enteredGoalText: string) => {
		if (enteredGoalText.trim().length == 0) return
		setGoalList((prevState) => [
			...prevState,
			{ text: enteredGoalText, id: Math.random().toString() }
		])
		closeModal()
	}

	const deleteGoalHandler = (id: string) => {
		setGoalList((prevState: GoalList[]) => {
			return prevState.filter((item) => id !== item.id)
		})
	}

	return (
		<View style={styles.appContainer}>
			<Button title="Add New Goal" color="#5e0acc" onPress={openModal} />
			<GoalInput
				onAddGoal={addGoalHandler}
				modalVisible={isModalVisible}
				closeModal={closeModal}
			/>
			<View style={styles.goalsContainer}>
				<FlatList
					data={goalList}
					renderItem={(itemData) => (
						<GoalItem itemData={itemData} onDeleteItem={deleteGoalHandler} />
					)}
					keyExtractor={(item) => item.id}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16
	},

	goalsContainer: {
		flex: 5
	}
})
