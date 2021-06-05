import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'
import CategoryList from '../components/CategoryList'
import { Link } from 'react-router-dom';

export default function CategoryListPage({navigation}) {
        
    const addCategory = () =>{
        navigation.push('Add Category');
    }

    return (
            <View>
                    <Button title="Add Category" onPress={() => addCategory()}/>
                <CategoryList />
            </View>
        )
}
