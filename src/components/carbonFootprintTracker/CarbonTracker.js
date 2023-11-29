import {Text, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import CarCalculator from "./CarCalculator";
import PublicCalculator from "./PublicCalculator";

const Tab = createBottomTabNavigator();

function EmptyScreen() {
    return (<View><Text>Empty screen</Text></View>)
}

export default function CarbonTracker() {
    return (

        <Tab.Navigator initialRouteName={"Home"}>
            <Tab.Screen name={"Flights"} component={EmptyScreen}/>
            <Tab.Screen name={"Car"} component={CarCalculator}/>
            <Tab.Screen name={"Home"} component={EmptyScreen}/>
            <Tab.Screen name={"Motorbike"} component={EmptyScreen}/>
            <Tab.Screen name={"Public"} component={PublicCalculator}/>
        </Tab.Navigator>

    );
}