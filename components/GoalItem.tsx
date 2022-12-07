import { View, Text, StyleSheet, Pressable } from 'react-native'

const GoalItem = ({ itemData, onDeleteItem }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: '#210644' }}
				onPress={onDeleteItem.bind(this, itemData.item.id)}
				// style={(pressData) => pressData.pressed}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{itemData.item.text}</Text>
			</Pressable>
		</View>
	)
}

export default GoalItem

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc'
	},
	pressedItem: {
		opacity: 0.5
	},
	goalText: {
		color: '#fff',
		padding: 8
	}
})
