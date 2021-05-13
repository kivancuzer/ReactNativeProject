import React, { Component, useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import baseManager from '../service/BaseService';
import props from 'prop-types';

export default class ProductDetailsPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                {console.log(props)}
                <Text> textInComponent </Text>
            </View>
        )
    }
}




