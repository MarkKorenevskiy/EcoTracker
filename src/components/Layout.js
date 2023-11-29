import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
            <Image
                source={require('../../assets/save-the-planet.png')}
                style={styles.bottomImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#abbd8c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomImage: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
        opacity: 0.07,
        resizeMode: 'contain'
    }
});

export default Layout;
