import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import AddCategoryPage from './pages/AddCategoryPage';
import CategoryListPage from './pages/CategoryListPage';
import OrderListPage from './pages/OrderListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import UpdateCategoryPage from './pages/UpdateCategoryPage';
import BottomBar from './components/BottomBar';


export default function App() {
  return (
    <View style={{ display: "flex", flexDirection: "column", minHeight: '100vh' }}>
      <Router>
            <Switch>
              <Route exact path="/product-list" component={ProductListPage} />
              <Route exact path="/add-category" component={AddCategoryPage} />
              <Route exact path="/category-list" component={CategoryListPage} />
              <Route exact path="/order-list" component={OrderListPage} />
              <Route exact path="/product-details/:id" component={ProductDetailsPage} />
              <Route exact path="/update-category" component={UpdateCategoryPage} />
              <Redirect to="/product-list" />
            </Switch>
        <BottomBar style={{ position: "fixed", bottom: 0 }} />
      </Router>
    </View>
  );
}

