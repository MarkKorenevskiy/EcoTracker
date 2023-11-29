import {FlatList, StyleSheet, Text, View} from "react-native";
import Layout from "../Layout";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function TipSection({tip}) {
    return (
        <View style={styles.tipContainer}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipText}>{tip.tip}</Text>
        </View>
    );
}

export default function WasteReductTips() {

    const [tips, setTips] = useState([]);

    useEffect(() => {
        async function fetchTips() {
            try {
                const jsonString = await AsyncStorage.getItem('tips');
                setTips(jsonString != null ? JSON.parse(jsonString) : []);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchTips();
    }, []);

    return (
        <Layout>
            <FlatList
                data={tips}
                renderItem={({item}) => <TipSection tip={item}/>}
                keyExtractor={item => item.key.toString()}
                contentContainerStyle={styles.tipsContainer}
                showsVerticalScrollIndicator={false}
            />
        </Layout>
    );
}

const styles = StyleSheet.create({
    tipsContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    tipContainer: {
        backgroundColor: '#e0e0e0',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
    },
    tipTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        color: '#26562f',
    },
    tipText: {
        fontSize: 16,
    }
});
