import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "./src/components/HomeScreen";
import CarbonTracker from "./src/components/carbonFootprintTracker/CarbonTracker";
import WasteReductTips from "./src/components/wasteReductionTips/WasteReductTips";
import PersonalPage from "./src/components/personalPage/PersonalPage";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={"Personal Page"} component={PersonalPage}/>
        <Drawer.Screen name={"Home"} component={HomeScreen}/>
        <Drawer.Screen name={"Carbon Tracker"} component={CarbonTracker}/>
        <Drawer.Screen name={"Waste Reduction Tips"} component={WasteReductTips}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
