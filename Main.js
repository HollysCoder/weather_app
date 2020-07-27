import React from "react";
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


export default function Main(){
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text >Main</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#ffffff"
    }
});