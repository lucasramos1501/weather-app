import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, ActivityIndicator, Image } from 'react-native';
import * as Location from 'expo-location';
import { Picsum } from 'picsum-photos';
import styled from 'styled-components';
import axios from 'axios';

import CurrentyInfo from './components/CurrentyInfo.js';
import Forecast from './components/Forecast.js';



export default function App() {
	const BGImage = Picsum.url();
	const [weatherData, setWeatherData] = useState();
	const [currentLocation, setCurrentLocation] = useState();
	const [attComponenet, setAttComponenet] = useState();

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== "granted") {
				alert("Permissão para acessar a sua localização negada!");
				return;
			}
			let { coords } = await Location.getCurrentPositionAsync({accuracy: 6});
			setCurrentLocation({ lat: coords.latitude, lon: coords.longitude });
		})();
	}, []);


	function handleAttData() {
		axios.get("https://api.hgbrasil.com/weather", {
			params: {
				key: "efbf1256",
				lat: currentLocation.lat,
				lon: currentLocation.lon,
				user_ip: "remote",
			}
		}).then(response => {
			setWeatherData(response.data);
			attComponenet ? setAttComponenet(false) : setAttComponenet(true);
		}).catch(err =>{
			alert(err);
		});
	}

	return (
		<SafeAreaView>
			<Container>
				<ImageBG source={{ uri: BGImage }}>
					<InfoArea>
						<InfoPress onPress={handleAttData}>
							<CurrentyInfo props={weatherData} attComponenet={attComponenet}/>
							<Forecast props={weatherData} attComponenet={attComponenet}/>
						</InfoPress>
					</InfoArea>
				</ImageBG>
			</Container>
		</SafeAreaView>
	);
}

const Container = styled.View`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`
const ImageBG = styled.ImageBackground`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`
const InfoArea = styled.View`
	width: 80%;
	height: 80%;
	background-color: #fff;
	border: 0.5px solid #111;
	border-radius: 10px;
`
const InfoPress = styled.TouchableOpacity`
	width: 100%;
	height: 100%;
	flex: 1;
	border-radius: 10px;
	align-items: center;
	background-color: #fff;
	padding: 10px;
`
