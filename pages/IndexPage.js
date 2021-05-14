import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-dom'

export default class IndexPage extends Component {
    render() {
        return (
            <View style = {{flex: 5}}>
                <View style={{flex: 1, marginLeft:50, marginTop:50}}>
                <Text style={{fontSize: 70, fontWeight:'300', fontStyle:'italic'}}>Choose one ..</Text>
                </View>
              <View style={{ flex: 4, flexDirection: 'column' , margin: 10 , justifyContent:' space-around' }}>
                <View style={{ flex: 1, backgroundColor: '#F4BC02', justifyContent: 'center', alignItems: 'center', borderRadius: 250, margin: 50, marginHorizontal: 200}}>
                    <Link className="nav-link" to="/product-list" style={{textDecoration: 'none'}}>
                        <Text style={{ color: '#F0F0F0', fontSize: 50, fontWeight:'900' }}>Products</Text>
                    </Link>
                </View>
                <View style={{ flex: 1, backgroundColor: '#ff5338', justifyContent: 'center', alignItems: 'center' ,borderRadius: 250,margin: 50, marginHorizontal: 200}}>
                    <Link className="nav-link" to="/category-list" style={{textDecoration: 'none'}}>
                        <Text style={{ color: '#F0F0F0', fontSize: 50, fontWeight:'900' }}>Categories</Text>
                    </Link>
                </View>
                <View style={{ flex: 1, backgroundColor: '#4391CE', justifyContent: 'center', alignItems: 'center' ,borderRadius: 250, margin: 50, marginHorizontal: 200}}>
                    <Link className="nav-link" to="/order-list" style={{textDecoration: 'none'}}>
                        <Text style={{ color: '#F0F0F0', fontSize: 50 , fontWeight:'900'}}>Orders</Text>
                    </Link>
                </View>
            </View>
            </View>
        )
    }
}
