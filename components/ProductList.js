import React, { useState, useEffect } from 'react'
import { View } from 'react-native';
import baseManager from '../service/BaseService';
import { ListItem, Icon } from 'react-native-elements'

export default function ProductList() {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        fillData();
    }, []);

    const fillData = () => {
        baseManager.get('api/products')
            .then((data) => {
                setproducts(data);
            })
    }

    return (
        <View>
            {
                products.map((product, index) => {
                    return (
                        <ListItem key={index}>
                            <ListItem.Content>
                                <ListItem.Title>{product.name}</ListItem.Title>
                                <ListItem.Subtitle>{product.unitPrice}</ListItem.Subtitle>

                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </View>
    )
}
