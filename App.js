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
	const [weatherData, setWeatherData] = useState();
	const [location, setLocation] = useState();
	const [attData, setAttData] = useState()
	
	useEffect(()=>{	
		async function getWatherData(lat, long){
			const params = {
				access_key: "bb290c73b9905318c13ae3d9b7bf4d91",
				query: `Santo Antonio de Jesus`
			}

			const response = await axios.get("http://api.weatherstack.com/current", {params});

			setWeatherData(response.data);	
		}

		async function getLocation(){
			await Location.requestPermissionsAsync();
			
			await Location.getCurrentPositionAsync({})
				.then(response => {
					setLocation(response.coords);
					getWatherData(response.coords.latitude, response.coords.longitude);
				})
			}

		getLocation();

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
					<Text>{weatherData.current.feelslike}</Text>
					<Text>Weather in {weatherData.location.name}</Text>
					<Text>{weatherData.location.region}</Text>
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
	padding: px;
	align-items: center;
	justify-content: center;
`
 