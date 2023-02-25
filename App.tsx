/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Search from './screens/Search';
import Tasks from './screens/Tasks';
import Calendar from './screens/Calendar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {Text, View} from 'react-native';
import AddTask from './screens/AddTask';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarLabel: ({focused}) => {
              return focused ? (
                <Text style={{fontWeight: 'bold', color: 'F5729B'}}>
                  {route.name}
                </Text>
              ) : (
                <Text
                  style={{
                    fontWeight: 'normal',
                    fontSize: 15,
                    color: '#c4c4c4',
                  }}>
                  {route.name}
                </Text>
              );
            },
            tabBarStyle: {position: 'absolute', elevation: 0},
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Icon
                  name="grid"
                  color={focused ? '#ee5067' : '#020047'}
                  size={focused ? 25 : 25}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Icon
                  name="search"
                  color={focused ? '#ee5067' : '#020047'}
                  size={focused ? 25 : 25}
                />
              ),
            }}
          />
          <Tab.Screen
            name="AddTask"
            component={AddTask}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View style={{position: 'absolute', top: -45, elevation: 10}}>
                  <Icon
                    name="add-circle"
                    color={focused ? '#ee5067' : '#ee5067'}
                    size={focused ? 80 : 80}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Tasks"
            component={Tasks}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Icon
                  name="list"
                  color={focused ? '#ee5067' : '#020047'}
                  size={focused ? 25 : 25}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Icon
                  name="calendar"
                  color={focused ? '#ee5067' : '#020047'}
                  size={focused ? 25 : 25}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
