import React, {Component, useEffect, useState} from 'react'
import { Text, View , Button} from 'react-native'
import {Icon, ListItem} from "react-native-elements";
import baseManager from "../service/BaseService";


export default function CategoryListPage({navigation}) {


    const [categoris, setcategories] = useState([]);

    useEffect(() => {
        fillData();
    }, []);

    const fillData = () => {
        baseManager.get('api/categories')
            .then((data) => {
                setcategories(data);
            })
    }


    const addCategory = () =>{
        navigation.push('Add Category');
    }

    const updateCategory = (id,name,description) => {
        navigation.navigate('Update Category',{categoryId:id, categoryName: name, categoryDescription:description})
    }

    const deleteCategory = (id) => {
        baseManager.delete('api/categories', id)
            .then((data) => {
                fillData();
            })
    }

    return (
            <View>
                    <Button title="Add Category" onPress={() => addCategory()}/>
                <View>
                    {
                        categoris.map((category, index) => {
                            return (
                                <View>
                                    <ListItem key={index}>
                                        <ListItem.Content>
                                            <ListItem.Title>{category.name}</ListItem.Title>
                                            <ListItem.Subtitle>{category.description}</ListItem.Subtitle>
                                        </ListItem.Content>

                                        <Icon style={{ justifyContent: 'flex-end' }}
                                              name='update' onPress={() => updateCategory(category.id,category.name,category.description)} />


                                        <Icon style={{ justifyContent: 'flex-end' }}
                                              name='delete' onPress={() => deleteCategory(category.id)} />
                                    </ListItem>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
}
