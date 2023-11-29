import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Layout from '../Layout';

const MotorbikeCalculator = () => {
    const [kms, setKms] = useState('');
    const [emission, setEmission] = useState(0);

    const handleTextChange = (text) => {
        setKms(text.replace(/[^0-9]/g, ''));
    };

    const calculateEmissions = () => {
        const kmsNum = parseFloat(kms) || 0;
        setEmission(kmsNum * 0.15);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Layout>
                <Text style={styles.title}>Calculate your carbon footprint with your motorbike trips</Text>
                <Text style={styles.label}>Mileage: {kms} kms</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Enter mileage in kms'}
                    keyboardType={'numeric'}
                    onChangeText={handleTextChange}
                    value={kms}
                />
                <TouchableOpacity style={styles.button} onPress={calculateEmissions}>
                    <Text style={styles.buttonText}>Calculate</Text>
                </TouchableOpacity>
                <Text style={styles.result}>Total Emissions: {emission.toFixed(2)} kg CO<Text style={styles.subscript}>2</Text></Text>
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
        marginBottom: 350,
    },
    subscript: {
        fontSize: 12,
        lineHeight: 20,
        fontWeight: 'bold',
    },
});

export default MotorbikeCalculator;