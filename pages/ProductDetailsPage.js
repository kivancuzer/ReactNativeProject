import React, {Component, useState, useEffect} from 'react'
import {Text, View} from 'react-native'
import baseManager from '../service/BaseService';
import { ListItem, Icon, Card } from 'react-native-elements'

export default function ProductDetailsPage({route}) {

    const [product, setproduct] = useState([]);

    useEffect(() => {
        fillData();
    }, []);

    const fillData = () => {
        baseManager.delete('api/categories', 9)
            .then((data) => {
                fillData();
            })
        baseManager.get(`api/products/${productId}`)
            .then((data) => {
                setproduct(data);
            })
    }

    let { productId } = route.params

    return (
        <View>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{product.name}</ListItem.Title>
                    <ListItem.Subtitle>{product.quantityPerUnit}</ListItem.Subtitle>
                    <ListItem.Subtitle>{product.unitPrice}</ListItem.Subtitle>
                    <ListItem.Subtitle>{product.discontinued ? "Discontinued" : "Available"}</ListItem.Subtitle>
                    <ListItem.Subtitle>{product.categoryId}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </View>
    )


}


