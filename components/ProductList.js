import React, {useState, useEffect} from 'react'
import {View,} from 'react-native';
import baseManager from '../service/BaseService';
import {ListItem, Icon,Card} from 'react-native-elements'
import {Link} from 'react-router-dom';


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

    const deleteProduct = (id) => {
        baseManager.delete('api/products', id)
            .then((data) => {
                fillData();
            })
    }

    return (

        <View style={{flex:5, padding:50}}>
         <Appbar.Header>
             <Appbar.Content titleStyle={{textAlign: 'center'}} title="Product List" />
         </Appbar.Header>

            <View style={{flex:4, paddingTop:50}}>
            {
                products.map((product, index) => {
                    return (
                                <ListItem key={index}>
                                    <Card>
                                    <Link to={`/product-details/${product.id}`} style={{textDecoration: 'none'}}>
                                        <ListItem.Content>
                                            <ListItem.Title>{product.name}</ListItem.Title>
                                            <ListItem.Subtitle>{product.unitPrice}</ListItem.Subtitle>
                                        </ListItem.Content>
                                    </Link>
                                    <Icon style={{justifyContent: 'flex-end'}}
                                          name='delete' onPress={() => deleteProduct(product.id)}/>
                                    </Card>
                                </ListItem>
                    )
                })
            }
            </View>

        </View>
    )
}
