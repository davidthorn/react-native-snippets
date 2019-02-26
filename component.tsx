import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

interface HomeProps {

}

interface HomeState {

}

export default class HomeFeature extends Component<HomeProps, HomeState> {

    constructor(props: HomeProps , state: HomeState) {
        super(props, state)
        this.state = {
        }
    }

    render() {
        return (
            <View style={style.view}>
                <Text>Hello world</Text>
            </View>
        )
    }

}

const style = StyleSheet.create({
    view: {
    }
})