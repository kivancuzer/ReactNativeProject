import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-dom'

export default class BottomBar extends Component {
    render() {
        return (
            <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <View style={{ flex: 1, backgroundColor: '#195082', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                    <Link className="nav-link" to="/product-list" style={{textDecoration: 'none'}}>
                        <Text style={{ color: '#F0F0F0', style: 'bold' }}>Products</Text>
                    </Link>
                </View>
                <View style={{ flex: 1, backgroundColor: '#195082', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                    <Link className="nav-link" to="/category-list" style={{textDecoration: 'none'}}>
                        <Text style={{ color: '#F0F0F0' }}>Categories</Text>
                    </Link>
                </View>
                <View style={{ flex: 1, backgroundColor: '#195082', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                    <Link className="nav-link" to="/order-list" style={{textDecoration: 'none'}}>
                        <Text style={{ color: '#F0F0F0' }}>Orders</Text>
                    </Link>
                </View>
            </View>
        )
    }
}
