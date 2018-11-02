import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StyledText from '../components/StyledText';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

// focused={focused}
// name={
//   Platform.OS === 'ios'
//     ? `ios-information-circle${focused ? '' : '-outline'}`
//     : 'md-information-circle'
// }

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon

    />
  ),
};

const RecipesStack = createStackNavigator({
  Recipes: RecipesScreen,
});

// focused={focused}
// name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}

RecipesStack.navigationOptions = {
  tabBarLabel: 'Recipes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon

    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

// focused={focused}
// name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    />
  ),
};

export default createMaterialBottomTabNavigator({
  HomeStack,
  RecipesStack,
  SettingsStack,
},
{
  initialRouteName: 'HomeStack',
  activeColor: '#f0edf6',
  inactiveColor: '#2d3436',
  barStyle: { backgroundColor: '#0984e3' },
});
