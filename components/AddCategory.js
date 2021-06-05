import React,{useState} from "react"
import {View, TextInput, Button} from "react-native"
import {Input} from "react-native-elements/dist/input/Input"
import baseManager from "../service/BaseService";
import config from "../data/config";

export default function AddCategory() {

const [categoryName, setCategoryName] = useState('');
const [description, setDescription] = useState('');

    const addCategory = () => {
        baseManager.post('api/categories', {name:categoryName,description:description}
            .then((res) => res.json())
            .then((res) => {
                alert("Category Added")
            })
        )
    }

    // fetch(config.apiUrl+'api/categories', addCategory())

    return(
        <View>
            <Input placeholder='Category Name'
            onChangeText={value => setCategoryName({categoryName:value}) }
            />

            <Input placeholder='Description'
            onChangeText={value => setDescription({description : value})}
            />

            <Button onPress={() => addCategory()} title='Add'/>
        </View>

    )
}