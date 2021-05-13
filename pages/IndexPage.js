import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-dom'

export default class IndexPage extends Component {
    render() {
        return (
            <View style = {{flex : 3}}>
              <View style={{ flex: 3, flexDirection: 'column' , margin : 10 , justifyContent:'space-around' }}>
                <View style={{ flex: 1, backgroundColor: '#195082', justifyContent: 'center', alignItems: 'center'}}>
                    <Link className="nav-link" to="/product-list" style={{textDecoration: 'none'}}>
                        <Text style={{ color: '#F0F0F0', fontSize: 30, style: 'bold' }}>Products</Text>
                    </Link>
                </View>
                <View style={{ flex: 1, backgroundColor: '#195082', justifyContent: 'center', alignItems: 'center' }}>
                    <Link className="nav-link" to="/category-list" style={{textDecoration: 'none'}}>
                        <Text style={{ color: '#F0F0F0', fontSize: 30, style: 'bold' }}>Categories</Text>
                    </Link>
                </View>
                <View style={{ flex: 1, backgroundColor: '#195082', justifyContent: 'center', alignItems: 'center' }}>
                    <Link className="nav-link" to="/order-list" style={{textDecoration: 'none'}}>
                        <Text style={{ color: '#F0F0F0', fontSize: 30 , style: 'bold'}}>Orders</Text>
                    </Link>
                </View>
            </View>
            </View>
        )
    }
}
