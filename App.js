import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "./src/components/HomeScreen";
import CarbonTracker from "./src/components/carbonFootprintTracker/CarbonTracker";
import WasteReductTips from "./src/components/wasteReductionTips/WasteReductTips";
import PersonalPage from "./src/components/personalPage/PersonalPage";
import {useCallback, useEffect, useState} from "react";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {tips} from "./assets/loadData/tips";

const Drawer = createDrawerNavigator();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                try {
                    await AsyncStorage.setItem('tips', JSON.stringify(tips));
                    console.log('tips loaded');
                } catch (err) {
                    console.log(err.message);
                }
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={'Home'}>
                <Drawer.Screen name={"Personal Page"} component={PersonalPage}/>
                <Drawer.Screen name={"Home"} component={HomeScreen}/>
                <Drawer.Screen name={"Carbon Tracker"} component={CarbonTracker}/>
                <Drawer.Screen name={"Waste Reduction Tips"} component={WasteReductTips}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
