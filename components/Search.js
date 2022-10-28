import React, { Component } from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import MeteoStyle from "../MeteoStyle";

export default class Search extends Component {

    static navigationOptions = {
        tabBarIcon: () => {
          return <Text>Recherche</Text>
        }
      }

    constructor (props) {
        super(props)
        this.state = {
            city: "Boulogne-sur-Mer"
        }
    }

    setCity (city) {
        this.setState({city})
    }

    submit() {
        this.props.navigation.navigate('Result', {city:this.state.city})
    }
    render() {
        return (
            <View style={MeteoStyle.view}>
            <TextInput 
            underlineColorAndroid='transparent' style={MeteoStyle.input}
            onChangeText={(text) => this.setCity(text)}
            value={this.state.city}
            />
            <Button color={MeteoStyle.color} onPress={() => this.submit()} title="Rechercher"/>
            </View>
        )
    }
}