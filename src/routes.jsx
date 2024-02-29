import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { Entypo, Feather } from '@expo/vector-icons';

import { Striming } from './pages/Striming'
import { Account } from './pages/Account'
import { Favorites } from './pages/Favorites'
import { Search } from './pages/Search'
import { theme } from './styles/theme.ts'

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderTopColor: 'Transparent',
          paddingTop: 5,
          paddingBottom: 5,
          minHeight: 65
        },

        tabBarActiveTintColor: theme.colors.green_700,
        tabBarInactiveTintColor: theme.colors.gray_20,
        headerStyle:{ 
          backgroundColor: theme.colors.gray_25,
          height: 100
        },
        headerTitleStyle:{ color: theme.colors.green_700 },
      
      }}
    >
      <Tab.Screen 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          )
        }}
        name="Procurar" component={Striming} 
      />
      
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="video" size={size} color={color} />
          )
        }}
        name="Videos" component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="heart" size={size} color={color} />
          )
        }}
        name="Favoritos" component={Favorites}
      />
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          )
        }}
        name="Perfil" component={Account}
      /> */}
    </Tab.Navigator>
  )
}