import React from 'react'
import {Text, View, TouchableHighlight, Button} from 'react-native'

export default function IndexPage({navigation}) {

    const goCategory = () => {
        navigation.push('Category List')
    }

    const goOrder = () => {
        navigation.push('Order List')
    }

    const goProduct = () => {
        navigation.push('Product List')
    }

    return (

        <View style={{
            flex: 9,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            backgroundColor: '#ccd9eb'
        }}>
            <TouchableHighlight onPress={() => goCategory()}>
                <View style={{
                    backgroundColor: '#EB7662',
                    flex: 3,
                    padding: 20,
                    borderRadius: 10,
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                    <Text h3 style={{color: 'white', fontSize: 20}}>Category List</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => goProduct()}>
                <View style={{
                    backgroundColor: 'green',
                    flex: 3,
                    marginTop: 10,
                    borderRadius: 10,
                    padding: 20,
                    alignItems: 'center'
                }}>
                    <Text h3 style={{color: 'white', fontSize: 20}}>Product List</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => goOrder()}>
                <View style={{
                    backgroundColor: '#FBB563',
                    flex: 3,
                    marginTop: 10,
                    borderRadius: 10,
                    padding: 20,
                    alignItems: 'center'
                }}>
                    <Text h1 style={{color: 'white', fontSize: 20}}>Order List</Text>
                </View>
            </TouchableHighlight>

        </View>
    );
}

