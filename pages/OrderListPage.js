import React, {Component} from 'react'
import {Text, View} from 'react-native'
import OrderList from '../components/OrderList'

export default function OrderListPage({navigation}) {

    return (
        <View style={{backgroundColor: '#ccd9eb'}}>
            <OrderList/>
        </View>
    )

}
