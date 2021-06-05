import React, { useState} from 'react'
import {Button, Text, View} from 'react-native'
import {Input} from "react-native-elements/dist/input/Input";
import baseManager from "../service/BaseService";


export default function AddCategoryPage({ navigation: { goBack } }) {
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');

    const addCategory = () => {
        baseManager.post('api/categories', { name:categoryName,description:description})
            .then((res) => {
                alert("Category Added!");
                goBack();
                goBack();
            })
    }

    return(
        <View>
            <Input placeholder='Category Name'
                   onChangeText={value => setCategoryName(value) }
            />

            <Input placeholder='Description'
                   onChangeText={value => setDescription(value)}
            />

            <Button onPress={() => addCategory()} title='Add'/>
        </View>

    )
}
