import React, { Component } from 'react'
import { View } from 'react-native'
import BottomBar from '../components/BottomBar'

export default class IndexPage extends Component {
    render() {
        return (
            <View style={{flex:12}}>
                <View style={{flex:11}}></View>
                <View style={{flex:1}}><BottomBar/></View>
            </View>
        )
    }
}
