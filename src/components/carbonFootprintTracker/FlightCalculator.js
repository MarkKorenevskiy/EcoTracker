import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Layout from '../Layout';
import axios from 'axios';

const FlightCalculator = () => {
    const [departureAirport, setDepartureAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Layout>
                <Text style={styles.title}>Calculate your carbon footprint with your flight trips</Text>
                <Text style={styles.label}>Enter Departure city</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'City'}
                    onChangeText={handleDepartureChange}
                />
                <Text style={styles.label}>Enter Arrival city</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'City'}
                    onChangeText={handleArrivalChange}
                />
                <TouchableOpacity style={styles.button} onPress={handleCalculate}>
                    <Text style={styles.buttonText}>Calculate</Text>
                </TouchableOpacity>
                <Text style={styles.result}>Total Emissions: {Math.round((emission + Number.EPSILON) * 100) / 100} kg CO<Text style={styles.subscript}>2</Text></Text>
            </Layout>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#26562f',
        textAlign: 'center',
        padding: 10,
    },
    label: {
        fontSize: 20,
        color: '#ddd',
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 10,
        margin: 10,
        width: '80%',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#26562f',
        padding: 15,
        borderRadius: 5,
        marginTop: 15,
        width: '60%',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    result: {
        fontSize: 20,
        color: '#333',
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 280,
    },
    subscript: {
        fontSize: 12,
        lineHeight: 20,
        fontWeight: 'bold',
    },
});

export default FlightCalculator;