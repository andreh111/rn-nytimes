import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import ArticlesList from './screens/articles-list/articles-list.screen';
import ArticleDetail from './screens/article-detail/article-detail.screen';
import { RootStackParamList } from './types';


const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ArticlesList" component={ArticlesList} options={{
          headerTitle: 'NY Times Articles'
        }} />
        <Stack.Screen name="ArticleDetail" component={ArticleDetail} options={{
          headerTitle: 'Article Details'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;

