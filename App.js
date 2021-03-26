import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, ActivityIndicator, Image} from 'react-native';
import * as Location from "expo-location"
import { Constants } from 'expo-constants';
import {Picsum} from 'picsum-photos';
import styled from 'styled-components';
import axios from 'axios';



export default function App() {
	const BGImage = Picsum.url();
	const [weatherData, setWeatherData] = useState(null);
	const [location, setLocation] = useState(null);
	const [attData, setAttData] = useState()

	useEffect(()=>{
		(async ()=>{
			let { status } = await Location.requestPermissionsAsync();
			if(status !== "granted") {
				alert("Permissão para acessar a sua localização negada!");
				return;
			}

			let { coords } = await Location.getLastKnownPositionAsync();
			setLocation({lat: coords.latitude, lon: coords.longitude});
		})();

		(async ()=>{
			let lat = location.lat;
			let lon = location.lon;

			axios.get("https://api.hgbrasil.com/weather", {
			params: {
				key: "efbf1256",
				lat,
				lon,
				user_ip: "remote",
				}	
			}).then(response => {
				setWeatherData(response.data);
			});
		})();
		
		console.log(weatherData);

	}, [attData]);

	function handleAttData(){
		attData ? setAttData(false) : setAttData(true);
	}
	
  return (
    <SafeAreaView>
      <Container>
			<ImageBG source={{  uri: BGImage }}>
				<InfoArea >	
				<InfoPress onPress={handleAttData}>
					<Text>oi</Text>
				</InfoPress>
				</InfoArea>
			</ImageBG>
	  </Container>
    </SafeAreaView>
  );
}

const Container = styled.View `
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`
const ImageBG = styled.ImageBackground `
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`
const InfoArea = styled.View `
	width: 80%;
	height: 80%;
	background-color: #fff;
	border: 0.5px solid #111;
	border-radius: 10px;
`
const InfoPress = styled.TouchableOpacity`
	flex: 1;
	border-radius: 10px;
	align-items: center;
	background-color: #fff;
	padding: 10px;
	align-items: center;
	justify-content: center;
`
 