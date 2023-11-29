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
            <Tab.Screen name={"Flights"} component={FlightCalculator} options={{ headerShown: false }} />
            <Tab.Screen name={"Car"} component={CarCalculator} options={{ headerShown: false }} />
            <Tab.Screen name={"Home"} component={EmptyScreen} options={{ headerShown: false }} />
            <Tab.Screen name={"Motorbike"} component={MotorbikeCalculator} options={{ headerShown: false }} />
            <Tab.Screen name={"Public"} component={PublicCalculator} options={{ headerShown: false }} />
        </Tab.Navigator>

    );
}