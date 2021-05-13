import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'
import CategoryList from '../components/CategoryList'
import { Link } from 'react-router-dom';

export default class CategoryListPage extends Component {
    render() {
        return (
            <View>
                <Link style={{ textDecoration: 'none'  }} to="/add-category">
                    <Button
                        title="Add Category"
                    />
                </Link>
                <CategoryList />
            </View>
        )
    }
}
