import React, { useState, useEffect } from 'react'
import { View, Button } from 'react-native'
import baseManager from '../service/BaseService';
import { ListItem, Icon } from 'react-native-elements'
import { Link } from 'react-router-dom';

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

    const deleteCategory = (id) => {
        baseManager.delete('api/categories', id)
            .then((data) => {
                fillData();
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
                            <Link style={{textDecoration: 'none'}} to="/update-category">
                                <Button
                                    title="Update"
                                />
                            </Link>

                            <Icon style={{ justifyContent: 'flex-end' }}
                                name='delete' onPress={() => deleteCategory(category.id)} />
                        </ListItem>
                    )
                })
            }
        </View>
    )
}
