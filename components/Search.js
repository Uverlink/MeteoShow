import React, { Component } from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            city: "Boulogne-sur-Mer"
        }
    }

    setCity (city) {
        this.setState({city})
    }

    render() {
        return (
            <TextInput
            underlineColorAndroid='transparent' style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setCity(text)}
            value={this.state.city}
            />
        )
    }
}