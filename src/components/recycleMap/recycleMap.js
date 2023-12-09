import MapView, {Marker} from "react-native-maps";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {useState} from "react";
import {recyclePoints} from "../../../assets/loadData/recyclePoints";

const PointSection = ({point, onPointPress}) => {
    return (
        <TouchableOpacity
            key={point.id}
            onPress={() => {
                onPointPress(point)
            }}
        >
            <View>
                <Text>{point.title}</Text>
                <Text>{point.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default function RecycleMap() {

    const mapRef = React.createRef();

    const [region, setRegion] = useState({
        latitude: 43.663752,
        longitude: -79.408156,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
    });

    const handleRecyclePointPress = (point) => {
        console.log(point)
        setRegion({
            latitude: point.latlng.latitude,
            longitude: point.latlng.longitude,
            ...region
        });

        mapRef.current.animateToRegion({
            latitude: point.latlng.latitude,
            longitude: point.latlng.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        });
    }

    return (
        <View style={styles.container}>
            <Text>Maps</Text>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={region}
            >
                {recyclePoints.map((point) => (
                    <Marker
                        key={point.id}
                        coordinate={point.latlng}
                        title={point.title}
                        description={point.description}
                    />
                ))}
            </MapView>
            <FlatList
                nestedScrollEnabled
                data={recyclePoints}
                renderItem={({item}) => <PointSection point={item} onPointPress={handleRecyclePointPress}/>}
                keyExtractor={item => item.id.toString()}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,
        // height: 100,
        // width: 100,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    map: {
        height: 500,
        width: "90%",
        margin: 10,
        borderRadius: 20
    },
});