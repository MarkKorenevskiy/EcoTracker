import {View} from "react-native";
import {StyleSheet} from 'react-native';
import {Text} from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.content}>
            <Text style={styles.title}>How It All Started</Text>
            <Text style={styles.paragraph}>
                Our mission is to equip every individual with the tools to understand
                and reduce their carbon footprint, thereby contributing to the
                preservation of our planet for future generations.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
    }, title: {
        fontFamily: 'Arial Black', fontSize: 26, fontWeight: 'bold', color: '#26562f', marginBottom: 10,
    }, paragraph: {
        fontSize: 20, color: 'bkack', textAlign: 'center', marginBottom: 20,
    }, button: {
        backgroundColor: '#26562f', padding: 10, borderRadius: 5,
    }, buttonText: {
        fontFamily: 'Arial Black', color: '#FFFFFF', fontSize: 18, fontWeight: 'bold',
    },
});