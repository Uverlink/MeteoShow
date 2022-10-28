import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import MeteoStyle from "../MeteoStyle";

export default class About extends Component {
    render() {
        return (
            <View style={MeteoStyle.container}>
                <Text>MeteoShow est une application d'Apprentissage. Pour plus d'information, allez sur https://github.com/Uverlink/MeteoShow
                </Text>
            </View>
        )
    }
}

