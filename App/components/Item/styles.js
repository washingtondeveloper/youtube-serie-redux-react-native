import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		height: 80,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	image: {
		height: 80,
		width: 100,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5
	},
	description: {
		flex: 2,
		padding: 10
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18
	},
	titleName: {
		color: 'gray'
	},
	btn: {
		width: 50,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
