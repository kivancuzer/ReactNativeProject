import React, { Component } from 'react'
import { Text, View } from 'react-native'
import OrderList from '../components/OrderList'

export default class OrderListPage extends Component {
    render() {
        return (
            <View>
                <OrderList/>
            </View>
        )
    }
}
