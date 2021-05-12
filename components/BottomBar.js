import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class BottomBar extends Component {
    render() {
        return (
            <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-end' }}>
                <View style={{ flex: 1, backgroundColor: '#195082', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                    <Text style={{ color: '#F0F0F0', style: 'bold' }}>Products</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#195082', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                    <Text style={{ color: '#F0F0F0' }}>Categories</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#195082', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                    <Text style={{ color: '#F0F0F0' }}>Orders</Text>
                </View>
            </View>
        )
    }
}
