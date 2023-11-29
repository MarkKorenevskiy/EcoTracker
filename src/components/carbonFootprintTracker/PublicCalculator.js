import RNPickerSelect from 'react-native-picker-select';
import {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";

export default function PublicCalculator() {

    const [transportType, setTransportType] = useState('Train');
    const [kms, setKms] = useState(0);
    const [emission, setEmission] = useState(0);

    const handleTypeSelect = (value) => {
        setTransportType(value);
    }

    const handleMileageChange = (kms) => {
        if (kms.length === 0) {
            kms = '0';
        }
        setKms(kms);
    }

    const handleCalculate = () => {
        let result;
        switch (transportType) {
            case 'Train':
                result = kms * 0.06;
                break;
            case 'Subway':
                result = kms * 0.07;
                break;
            case 'Bus':
                result = kms * 0.15;
                break;
            case 'Taxi':
                result = kms * 0.25;
                break;
            default:
                result = kms;
                break;
        }
        setEmission(result);
    }

    return (
        <View>
            <Text>Transport type: {transportType}</Text>
            <RNPickerSelect
                onValueChange={handleTypeSelect}
                placeholder={{label: 'Select type', value: 'Train'}}
                items={[
                    {label: 'Train', value: 'Train'},
                    {label: 'Subway', value: 'Subway'},
                    {label: 'Bus', value: 'Bus'},
                    {label: 'Taxi', value: 'Taxi'}
                ]}
            />
            <Text>Mileage: {kms} km</Text>
            <TextInput placeholder={'Enter mileage in kms'} onChangeText={handleMileageChange}/>
            <Text>Your emissions is {emission} kg CO2</Text>
            <Button title={"Calculate"} onPress={handleCalculate}/>
        </View>
    );
}