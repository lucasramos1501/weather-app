import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import styled from 'styled-components'

export default function App() {
  return (
    <SafeAreaView>
      <Container>
        <ImageBG source={{  uri: "https://picsum.photos/200/300" }}>
           <InfoArea >
           <InfoTouchableOpacity>
              <Text>45º</Text>
             <Text>Weather in [City]</Text>
           </InfoTouchableOpacity>
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
border-radius: 10px;
`
const InfoTouchableOpacity = styled.TouchableOpacity`
flex: 1;
border-radius: 10px;
align-items: center;
background-color: #fff;
padding: 10px;
align-items: center;
justify-content: center;

`
 