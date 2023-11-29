import RNPickerSelect from 'react-native-picker-select';
import {useState} from "react";
import {Text, View} from "react-native";

export default function PublicCalculator() {

    const [transportType, setTransportType] = useState(null);

    const handleTypeSelect = (value) => {
        if (value == null){
            return setTransportType('Train');
        }
        setTransportType(value);
    }

    return (
        <View>
            <Text>Transport type: {transportType}</Text>
            <RNPickerSelect
                onValueChange={handleTypeSelect}
                items={[
                    {label: 'Train', value: 'train'},
                    {label: 'Subway', value: 'subway'},
                    {label: 'Bus', value: 'bus'},
                    {label: 'Taxi', value: 'taxi'}
                ]}
            />
        </View>
    );
}