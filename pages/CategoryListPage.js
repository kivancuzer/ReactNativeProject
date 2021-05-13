import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CategoryList from '../components/CategoryList'

export default class CategoryListPage extends Component {
    render() {
        return (
            <View>
                <CategoryList/>
            </View>
        )
    }
}
