import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Text, View } from 'react-native'
import ProductList from '../components/ProductList'

export default function ProductListPage ({navigation}) {

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

    const deleteProduct = (id) => {
        baseManager.delete('api/products', id)
            .then((data) => {
                fillData();
            })
    }

    const goDetailPage = (id) => {
        navigation.navigate('Product Details', { productId: id })
    }

    return (

        <View >
            {
                products.map((product, index) => {
                    return (
                        <ListItem key={index}>

                            <ListItem.Content>
                                <ListItem.Title>{product.name}</ListItem.Title>
                                <ListItem.Subtitle>{product.unitPrice}</ListItem.Subtitle>
                            </ListItem.Content>

                            <Icon style={{ justifyContent: 'flex-end' }}
                                name='update' onPress={() => goDetailPage(product.id)} />
                            <Icon style={{ justifyContent: 'flex-end' }}
                                name='delete' onPress={() => deleteProduct(product.id)} />
                        </ListItem>
                    )
                })
            }

        </View>
    )

}
