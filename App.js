import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	Image,
	Modal,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import Detail from './src/Detail';

export default function App() {
	const [alcool, setAlcool] = useState(0);
	const [gas, setGas] = useState(0);
	const [resultado, setResultado] = useState('');
	const [visible, setVisible] = useState(false);

	const calculo = () => {
		if (alcool === '' || gas === '') {
			alert('Informe o preço dos combustiveis');
		}

		const total = alcool / gas;
		if (total.toFixed(2) < 0.7) {
			setResultado('Álcool');
		} else {
			setResultado('Gasolina');
		}

		setVisible(true);
	};

	const closeModal = () => {
		setAlcool(0);
		setGas(0);
		setVisible(false);
	};

	return (
		<View style={styles.container}>
			<Image source={require('./src/images/logo.png')} style={styles.image} />
			<Text style={styles.title}>Qual a melhor opção?</Text>
			<StatusBar style='auto' />

			<View style={styles.containerCalc}>
				<Text style={styles.text}>Álcool (preço por litro)</Text>
				<TextInput
					style={styles.input}
					placeholder='5.00'
					value={alcool}
					onChangeText={(text) => setAlcool(text)}
					keyboardType='numeric'
				/>
				<Text style={styles.text}>Gasolina (preço por litro)</Text>
				<TextInput
					style={styles.input}
					placeholder='5.00'
					value={gas}
					onChangeText={(text) => setGas(text)}
					keyboardType='numeric'
				/>

				<TouchableOpacity style={styles.areaButton} onPress={calculo}>
					<Text style={styles.textButton}>Calcular</Text>
				</TouchableOpacity>
			</View>

			<Modal animationType='slide' transparent={true} visible={visible}>
				<Detail
					alcool={alcool}
					gas={gas}
					visible={closeModal}
					resultado={resultado}
				/>
			</Modal>
		</View>
	);
}

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
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	containerCalc: {
		width: '90%',
		marginTop: 50,
	},
	text: {
		color: '#fff',
		fontWeight: 'bold',
	},
	input: {
		backgroundColor: '#fff',
		borderRadius: 5,
		height: 40,
		padding: 10,
		marginTop: 10,
		marginBottom: 10,
	},
	areaButton: {
		backgroundColor: '#ee4130',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
	},
	textButton: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},
});
