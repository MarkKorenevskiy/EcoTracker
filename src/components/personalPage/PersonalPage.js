import {Text, View} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useFocusEffect} from "@react-navigation/native";
import * as React from 'react';

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
        <View>
            <Text>Personal page</Text>
            <Text>Your latest tracker result is {latestTrackerResult != null ?
                JSON.stringify(latestTrackerResult) : "No results"}</Text>
            <Text>Your daily waste reduction tip: {wasteTip != null ? JSON.stringify(wasteTip) :
                "Oops! Some gears of this app are not working properly"}</Text>
        </View>
    );
}