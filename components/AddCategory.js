import React,{useState} from "react"
import {View, Button} from "react-native"
import {Input} from "react-native-elements/dist/input/Input"
import baseManager from "../service/BaseService";


export default function AddCategory({navigation:{goBack}}) {

const [categoryName, setCategoryName] = useState('');
const [description, setDescription] = useState('');

    const addCategory = () => {
        baseManager.post('api/categories', {name:categoryName,description:description})
            .then((res) => {
                alert("Category Added!");
                goBack();
            })
    }

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