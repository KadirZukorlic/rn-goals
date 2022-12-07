import { View, Text, StyleSheet } from 'react-native'

const GoalItem = ({ itemData, onDeleteItem }) => {
	return (
		<View style={styles.goalItem}>
				onPress={onDeleteItem.bind(this, itemData.item.id)}
			<Text style={styles.goalText}>{itemData.item.text}</Text>
		</View>
	)
}

export default GoalItem

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc'
	},
	goalText: {
		color: '#fff'
	}
})
