import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import MeteoStyle from "../MeteoStyle";

export default class Result extends Component {
    render() {
        return (
            <View style={MeteoStyle.container}>
                <Text>Résultats
                </Text>
            </View>
        )
    }
}

