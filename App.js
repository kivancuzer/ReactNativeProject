import React from 'react';
import ProductListPage from './pages/ProductListPage';
import AddCategoryPage from './components/AddCategoryPage';
import CategoryListPage from './pages/CategoryListPage';
import OrderListPage from './pages/OrderListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import UpdateCategoryPage from './pages/UpdateCategoryPage';
import IndexPage from './pages/IndexPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from "@react-navigation/stack";

export default function App() {

    const Stack = createStackNavigator();

    return (
      <NavigationContainer >
          <Stack.Navigator >

          <Stack.Screen name="Index" component={IndexPage} />
          <Stack.Screen name="Order List" component={OrderListPage} />
          <Stack.Screen name="Product List" component={ProductListPage} />
          <Stack.Screen name="Category List" component={CategoryListPage} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsPage} />
          <Stack.Screen name="AddCategory" component={AddCategoryPage} />
          <Stack.Screen name="UpdateCategory" component={UpdateCategoryPage} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

