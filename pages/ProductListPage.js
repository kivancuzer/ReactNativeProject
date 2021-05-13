import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Text, View } from 'react-native'
import ProductList from '../components/ProductList'

export default class ProductListPage extends Component {

    render() {
        return (
            <View>

                <ProductList />

            </View>
        )
    }
}
