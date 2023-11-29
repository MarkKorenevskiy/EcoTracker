import {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";
import axios from "axios";

export default function FlightCalculator() {
    const [departureAirport, setDepartureAirport] = useState(null);
    const [arrivalAirport, setArrivalAirport] = useState(null);
    const [emission, setEmission] = useState(0);

    const handleDepartureChange = (airport) => {
        setDepartureAirport(airport);
    }

    const handleArrivalChange = (airport) => {
        setArrivalAirport(airport);
    }

    const handleCalculate = async () => {
        let result;
        let distance = await getDistanceBetweenCities(departureAirport, arrivalAirport);
        result = distance * 0.3;
        setEmission(result);
    }

    const getDistanceBetweenCities = async (departure, arrival) => {
        const options = {
            method: 'GET',
            url: 'https://distanceto.p.rapidapi.com/get',
            params: {
                route: `[{ "t": "${departure}"},  {"t": "${arrival}"}]`,
                car: 'false'
            },
            headers: {
                'X-RapidAPI-Key': 'eb248a629amsh367ec9231700b77p13289djsnd231213bf68a',
                'X-RapidAPI-Host': 'distanceto.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            return response.data.steps[0].distance.haversine;
        } catch (err) {
            console.log(err.message);
            return 0;
        }
    }

    return (
        <View>
            <Text>Calculate your carbon footprint with your flight trips</Text>
            <Text>Enter Departure city</Text>
            <TextInput placeholder={'City'} onChangeText={handleDepartureChange}/>
            <Text>Enter Arrival city</Text>
            <TextInput placeholder={'City'} onChangeText={handleArrivalChange}/>
            <Text>Total emissions: {Math.round((emission + Number.EPSILON) * 100) / 100} kg CO2</Text>
            <Button title={'Calculate'} onPress={handleCalculate}/>
        </View>
    );
}