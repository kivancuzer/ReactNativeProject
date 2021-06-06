import React,{useState} from "react"
import {View, TextInput, Button} from "react-native"
import {Input} from "react-native-elements/dist/input/Input"
import baseManager from "../service/BaseService";

export default function UpdateCategoryPage({route, navigation:{goBack}}) {
    const [categoryName, setCategoryName] = useState(route.params.categoryName);
    const [categoryDescription, setCategoryDescription] = useState(route.params.categoryDescription);

    const updateCategory = () => {
        baseManager.put(`api/categories/${categoryId}`, {name:categoryName,description:categoryDescription})
            .then((res) => {
                alert("Category Added!");
                goBack();
                goBack();
            })

    }

    let { categoryId } = route.params

    return(
        <View syle={{backgroundColor: '#ccd9eb'}}>
            <Input placeholder={categoryName}
                   onChangeText={value => setCategoryName(value) }
            />

            <Input placeholder={categoryDescription}
                   onChangeText={value => setCategoryDescription(value)}
            />

            <Button onPress={() => updateCategory()} title='Update'/>
        </View>

    )
}
