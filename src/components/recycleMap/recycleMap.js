import MapView, {Marker} from "react-native-maps";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {useState} from "react";
import {recyclePoints} from "../../../assets/loadData/recyclePoints";

const PointSection = ({ point, onPointPress }) => {
    return (
        <TouchableOpacity
            key={point.id}
            onPress={() => {
                onPointPress(point)
            }}
            style={styles.pointItem}
        >
            <Text style={styles.pointTitle}>{point.title}</Text>
            <Text style={styles.pointDescription}>{point.description}</Text>
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
                renderItem={({ item }) => <PointSection point={item} onPointPress={handleRecyclePointPress} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#abbd8c'
    },
    map: {
        height: 450,
        width: "90%",
        margin: 10,
        borderRadius: 20
    },
    pointItem: {
        backgroundColor: '#abbd8c',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    pointTitle: {
        fontSize: 18,
        color: '#26562f',
        fontWeight: 'bold',
    },
    pointDescription: {
        fontSize: 16,
        color: '#26562f',
    },
});