import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Layout from './Layout';

export default function HomeScreen() {
    return (
        <Layout>
            <Text style={styles.title}>How It All Started</Text>
            <Text style={styles.paragraph}>
                Our mission is to equip every individual with the tools to understand
                and reduce their carbon footprint, thereby contributing to the
                preservation of our planet for future generations.
            </Text>
        </Layout>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Arial Black',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#26562f',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 230,
    },
});