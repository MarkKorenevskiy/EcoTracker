import {Text, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useFocusEffect} from "@react-navigation/native";
import * as React from 'react';
import Layout from "../Layout";

export default function PersonalPage() {

    const [latestTrackerResult, setLatestTrackerResult] = useState(null);
    const [wasteTip, setWasteTip] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            async function loadTrackerResult() {
                try {
                    const jsonString = await AsyncStorage.getItem("tracker_results");
                    const trackerResults = jsonString != null ? JSON.parse(jsonString) : null;

                    if (trackerResults === null) {
                        return setLatestTrackerResult(null);
                    }

                    const latestResult = trackerResults.reduce(
                        (accumulator, currentValue) => {
                            return accumulator.date > currentValue.date ? accumulator : currentValue;
                        });

                    return setLatestTrackerResult(latestResult);

                } catch (err) {
                    console.log(err.message);
                }
            }

            loadTrackerResult();
        }, [])
    );

    useEffect(() => {
        async function loadWasteTip() {
            try {
                const jsonString = await AsyncStorage.getItem("tips");
                const tips = jsonString != null ? JSON.parse(jsonString) : null;

                if (tips === null) {
                    return setWasteTip(null);
                }

                // Getting boundaries of tips array to get random tip
                const min = 0;
                const max = tips.length - 1;

                let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
                setWasteTip(tips[randomNum]);
            } catch (err) {
                console.error(err.message);
            }
        }

        loadWasteTip();
    }, []);

    return (
        <Layout>
            <Text style={styles.title}>Personal Page</Text>
            <Text style={styles.paragraph}>
                Your latest tracker result:
            </Text>
            <Text style={styles.details}>
                Was on {new Date(latestTrackerResult?.date).toLocaleString("en-GB")}.
                You were using {latestTrackerResult.type}. Your result was {latestTrackerResult.result} kg CO2e
            </Text>
            <Text style={styles.paragraph}>
                Your daily waste reduction tip:
            </Text>
            <Text style={[styles.details, { marginBottom: 350 }]}>
                {wasteTip != null ? wasteTip.tip :
                    "Oops! Some gears of this app are not working properly"}
            </Text>
        </Layout>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#26562f',
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        lineHeight: 30,
    },
    details: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'normal',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 30,
    }
});