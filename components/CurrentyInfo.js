import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

export default function CurrentyInfo({ props, attComponenet }) {
    return (
        <>
            {attComponenet == null ?
                (<TextOfTouchArea>
                    <TextOfTouch>Toque na Tela</TextOfTouch>
                </TextOfTouchArea>)
                :
                (
                    <>
                        <CurrentyInfoArea>
                            <City>{props.results.city}</City>
                            <Temperature>{props.results.temp}°C</Temperature>
                            <DayAndDataArea>
                                <Currently>{props.results.currently}</Currently>
                                <Date>{props.results.date}</Date>
                            </DayAndDataArea>
                            <Description>{props.results.description}</Description>
                        </CurrentyInfoArea>
                    </>
                )
            }
        </>
    )
}

const CurrentyInfoArea = styled.View`
    width: 100%;
    height: 80%;
    padding: 5%;
`
const TextOfTouchArea = styled.View`
    width: 100%;
	height: 100%;
	justify-content: center;
    align-items: center;
`
const TextOfTouch = styled.Text`
    width: 50%;
    text-align: center;
    font-size: 30px;
    color:  #ffcc00;
    text-transform: uppercase;
    font-weight: bold;
`

const City = styled.Text`
	text-align: center;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
`
const Temperature = styled.Text`
    font-size: 80px;
    color:  #ffcc00;
    margin-top: 8%;
    text-align: center;
    text-transform: uppercase;
`

const Currently = styled.Text`
    font-size: 14px;
    text-transform: uppercase;
`

const Date = styled.Text`
    font-size: 14px;
    text-transform: uppercase;
`

const DayAndDataArea = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 18%;
    margin-bottom: 10%;
`

const Description = styled.Text`
    text-align: center;
    margin-top: 10%;
    text-transform: uppercase;
    font-weight: bold;
`




