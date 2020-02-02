import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#f1f1f1'
	},
	form: { width: '100%' },
	input: {
		height: 45,
		fontSize: 14,
		borderWidth: 1,
		borderColor: '#ddd',
		paddingHorizontal: 10,
		borderRadius: 5,
		marginBottom: 10,
		color: '#333',
		backgroundColor: '#fff'
	},
	btn: {
		height: 45,
		backgroundColor: '#007ac1',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnText: {
		color: '#fff',
		fontWeight: 'bold'
	}
});
