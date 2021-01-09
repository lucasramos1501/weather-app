import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View, ActivityIndicator} from 'react-native';
import {Picsum} from 'picsum-photos'
import styled from 'styled-components';

export default function App() {
	const BGImage = Picsum.url();
	
  return (
    <SafeAreaView >
      <Container>
			<ImageBG source={{  uri: BGImage }}>
				<InfoArea >
				<InfoPress>
					<Text>45º</Text>
					<Text>Weather in [City]</Text>
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
 