import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View style={style.view}>
                <Text style={style.style}>A propos de MeteoShow:
                    Application d'Apprentissage.
                </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view:{
        margin:20
    },
    title: {
        fontSize:22,
        marginBottom: 20
    }
})