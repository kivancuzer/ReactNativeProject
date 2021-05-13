import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import baseManager from '../service/BaseService';
import { ListItem, Icon } from 'react-native-elements'

export default function CategoryList() {

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

    return (
        <View>
        {
            categoris.map((category, index) => {
                return (
                    <ListItem key={index}>
                        <ListItem.Content>
                            <ListItem.Title>{category.name}</ListItem.Title>
                            <ListItem.Subtitle>{category.description}</ListItem.Subtitle>

                        </ListItem.Content>
                    </ListItem>
                )
            })
        }
    </View>
    )
}
