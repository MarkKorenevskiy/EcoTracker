import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Layout from '../Layout';

const PublicCalculator = () => {
    const [transportType, setTransportType] = useState('Train');
    const [kms, setKms] = useState(0);
    const [emission, setEmission] = useState(0);

    const handleTypeSelect = (value) => {
        setTransportType(value);
    };

    const handleMileageChange = (text) => {
        setKms(text.replace(/[^0-9]/g, ''));
    };

    const handleCalculate = () => {
        const kmsNum = parseFloat(kms) || 0;
        let result;
        switch (transportType) {
            case 'Train':
                result = kmsNum * 0.06;
                break;
            case 'Subway':
                result = kmsNum * 0.07;
                break;
            case 'Bus':
                result = kmsNum * 0.15;
                break;
            case 'Taxi':
                result = kmsNum * 0.25;
                break;
            default:
                result = kmsNum;
                break;
        }
        setEmission(result);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Layout>
                <Text style={styles.title}>Transport type: {transportType}</Text>
                <RNPickerSelect
                    onValueChange={handleTypeSelect}
                    placeholder={{label: 'Select type', value: 'Train'}}
                    items={[
                        {label: 'Train', value: 'Train'},
                        {label: 'Subway', value: 'Subway'},
                        {label: 'Bus', value: 'Bus'},
                        {label: 'Taxi', value: 'Taxi'}
                    ]}
                    style={pickerSelectStyles}
                />
                <Text style={styles.label}>Mileage: {kms} km</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Enter mileage in kms'}
                    onChangeText={handleMileageChange}
                    keyboardType={'numeric'}
                    value={kms.toString()}
                />
                <TouchableOpacity style={styles.button} onPress={handleCalculate}>
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
        marginBottom: 330,
    },
    subscript: {
        fontSize: 12,
        lineHeight: 20,
        fontWeight: 'bold',
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        width: '80%',
        marginTop: 10,
        alignSelf: 'center',
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        width: '80%',
        marginTop: 10,
    },
});

export default PublicCalculator;

