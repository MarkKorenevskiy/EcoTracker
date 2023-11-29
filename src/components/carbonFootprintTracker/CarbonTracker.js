import {Text, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CarCalculator from "./CarCalculator";
import PublicCalculator from "./PublicCalculator";
import FlightCalculator from "./FlightCalculator";
import MotorbikeCalculator from "./MotorbikeCalculator";

const Tab = createBottomTabNavigator();

function EmptyScreen() {
    return (<View><Text>Empty screen</Text></View>)
}

export default function CarbonTracker() {
    return (

        <Tab.Navigator initialRouteName={"Home"}>
            <Tab.Screen name={"Flights"} component={FlightCalculator}/>
            <Tab.Screen name={"Car"} component={CarCalculator}/>
            <Tab.Screen name={"Home"} component={EmptyScreen}/>
            <Tab.Screen name={"Motorbike"} component={MotorbikeCalculator}/>
            <Tab.Screen name={"Public"} component={PublicCalculator}/>
        </Tab.Navigator>

    );
}