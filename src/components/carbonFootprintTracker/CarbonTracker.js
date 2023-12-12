import {Text, StyleSheet, ScrollView} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CarCalculator from "./CarCalculator";
import PublicCalculator from "./PublicCalculator";
import FlightCalculator from "./FlightCalculator";
import MotorbikeCalculator from "./MotorbikeCalculator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Layout from "../Layout";

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <Layout>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>Welcome to Carbon Tracker!</Text>
                <Text style={styles.subTitle}>Understand and minimize your environmental impact with our easy-to-use carbon footprint tracking tool.</Text>
                <Text style={styles.header}>What's Your Carbon Footprint?</Text>
                <Text style={styles.paragraph}>Your carbon footprint is the total amount of greenhouse gases you generate through your actions and lifestyle choices. By understanding your footprint, you can make smarter, greener decisions.</Text>
                <Text style={styles.subHeader}>How Do You Contribute?</Text>
                <Text style={styles.listItem}><Text style={styles.bold}>Flights:</Text> Air travel significantly contributes to carbon emissions. Track your flight history to see its impact.</Text>
                <Text style={styles.listItem}><Text style={styles.bold}>Car:</Text> Daily commutes add up. Learn how your car usage affects the environment.</Text>
                <Text style={styles.listItem}><Text style={styles.bold}>Motorbike:</Text> Even smaller vehicles play a role. Discover the carbon footprint of your motorbike rides.</Text>
            </ScrollView>
        </Layout>
    );
}

export async function saveResultToStorage(result) {
    try {
        const jsonString = await AsyncStorage.getItem("tracker_results");
        const currentResults = jsonString != null ? JSON.parse(jsonString) : [];
        currentResults.push(result);
        await AsyncStorage.setItem("tracker_results", JSON.stringify(currentResults));
        console.log("Tracker result added to AsyncStorage");
    } catch (err) {
        console.log(err.message);
    }
}

export async function saveResultToStorage(result) {
    try {
        const jsonString = await AsyncStorage.getItem("tracker_results");
        const currentResults = jsonString != null ? JSON.parse(jsonString) : [];
        currentResults.push(result);
        await AsyncStorage.setItem("tracker_results", JSON.stringify(currentResults));
        console.log("Tracker result added to AsyncStorage");
    } catch (err) {
        console.log(err.message);
    }
}

export default function CarbonTracker() {
    return (

        <Tab.Navigator initialRouteName={"Home"}>
            <Tab.Screen name={"Flights"} component={FlightCalculator} options={{headerShown: false}}/>
            <Tab.Screen name={"Car"} component={CarCalculator} options={{headerShown: false}}/>
            <Tab.Screen name={"Home"} component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name={"Motorbike"} component={MotorbikeCalculator} options={{headerShown: false}}/>
            <Tab.Screen name={"Public"} component={PublicCalculator} options={{headerShown: false}}/>
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#abbd8c',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#26562f',
        marginBottom: 5,
        marginTop: 20,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 18,
        color: '#26562f',
        marginBottom: 10,
        textAlign: 'center',
        padding: 5,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#26562f',
        marginTop: 20,
        marginBottom: 5,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#26562f',
        marginTop: 20,
        marginBottom: 5,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 18,
        color: '#26562f',
        marginBottom: 10,
        padding: 10,
        textAlign: 'justify',
    },
    listItem: {
        fontSize: 18,
        color: '#26562f',
        marginBottom: 5,
        padding: 10,
    },
    bold: {
        fontWeight: 'bold',
    }
});
