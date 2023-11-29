import {Button, Text, TextInput, View} from "react-native";
import {useState} from "react";

export default function MotorbikeCalculator() {
    const [kms, setKms] = useState(0);
    const [emission, setEmission] = useState(0);

    const handleTextChange = (text) => {
        if (text.length === 0) {
            return setKms(0);
        }
        setKms(text);
    }

    const calculateEmissions = () => {
        setEmission(kms * 0.15);
    }

    return(
        <View>
            <Text>Calculate your carbon footprint with your motorbike trips</Text>
            <Text>Mileage {kms} kms</Text>
            <Text>Total emissions: {emission} kg C02</Text>
            <TextInput placeholder={'Enter mileage in kms'} onChangeText={handleTextChange}/>
            <Button title={'Calculate'} onPress={calculateEmissions}/>
        </View>
    );
}