import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Detail = ({ alcool, gas, visible, resultado }) => {
	return (
		<View style={styles.container}>
			<Image source={require('../images/gas.png')} style={styles.image} />
			<Text style={styles.title}>Compensa usar {resultado}</Text>

			<Text style={styles.secondTitle}>Com os preços:</Text>
			<Text style={styles.fuel}>Álcool: R$ {alcool}</Text>
			<Text style={styles.fuel}>Gasolina: R$ {gas}</Text>
			<TouchableOpacity style={styles.areaButton} onPress={visible}>
				<Text style={styles.textButton}>Calcular Novamente</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Detail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#212121',
		alignItems: 'center',
		justifyContent: 'center',
	},

	image: {
		height: 175,
		width: 175,
		marginBottom: 20,
	},
	title: {
		color: '#3cea53',
		fontSize: 24,
		fontWeight: 'bold',
	},
	secondTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
		marginTop: 30,
	},
	fuel: {
		color: '#fff',
		marginTop: 10,
	},
	areaButton: {
		marginTop: 30,
		padding: 10,
		borderRadius: 10,
		borderColor: '#ff0000',
		borderWidth: 1,
		width: '70%',
		alignItems: 'center',
	},
	textButton: {
		color: '#ff0000',
		fontWeight: 'bold',
	},
});
