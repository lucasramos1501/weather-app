import React, { useState, useEffect, useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components';

function Forecast({ props, attComponenet }) {
    let [forecasts, setForecasts] = useState();

    useEffect(() => {
        setForecasts(props);
        console.log("previsão=", forecasts);
    }, []);

    return (
        <>
            {forecasts == null || forecasts == undefined ?
                (<View />)
                :
                (
                    <ForecastArea>
                        <Forescast>Previsão</Forescast>

                        <DDWArea>
                            <Weekday>{forecasts.results.forecast[1].weekday}</Weekday>
                            <Date>{forecasts.results.forecast[1].date}</Date>
                            <Description>{forecasts.results.forecast[1].description}</Description>
                        </DDWArea>
                    </ForecastArea>
                )
            }
        </>
    )


}

export default Forecast;

const ForecastArea = styled.View`
	width: 100%;
	height: 20%;    
`
const Forescast = styled.Text`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
`

const DDWArea = styled.View`
	width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10%;
`
const Description = styled.Text`
    font-size: 14px;
    text-transform: uppercase;
`
const Date = styled.Text`
    font-size: 14px;
    text-transform: uppercase;
`
const Weekday = styled.Text`
    font-size: 14px;
    text-transform: uppercase;
`
