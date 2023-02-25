/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ToastAndroid,
  LogBox,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Tasks = ({route}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const {todoItems} = route.params;
  const [todoItem, setTodoItems] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('todoItems')
      .then(data => {
        if (data !== null) {
          setTodoItems(JSON.parse(data));
        }
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('todoItems', JSON.stringify(todoItems)).catch(error =>
      console.log(error),
    );
  }, [todoItems]);

  const deleteTodoItem = async index => {
    const updatedTodoList = [...todoItems];
    updatedTodoList.splice(index, 1);
    setTodoItems(updatedTodoList);
    await AsyncStorage.deleteItem('todoList', JSON.stringify(todoItems));
    ToastAndroid.show('Task deleted successfully!', ToastAndroid.SHORT);
  };

  const loadTodoItems = async () => {
    try {
      const items = await AsyncStorage.getItem('todoItems');
      setTodoItems(items !== null ? JSON.parse(items) : []);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadTodoItems();
  }, []);

  const refreshTodoItems = async () => {
    setRefreshing(true);
    await loadTodoItems();
    setRefreshing(false);
  };

  return (
    <View style={{padding: 20}}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          color: '#020047',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        Task List
      </Text>
      <FlatList
        data={todoItem}
        keyExtractor={(item, index) => index.toString()}
        refreshing={refreshing}
        onRefresh={refreshTodoItems}
        renderItem={({item, index}) => (
          <View
            key={index}
            style={{
              marginTop: 10,
              elevation: 3,
              padding: 20,
              borderRadius: 10,
              backgroundColor: '#fff',
              marginHorizontal: 5,
              marginBottom: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{fontSize: 18, fontWeight: '600', color: '#020047'}}>
                  {item.text}
                </Text>
                <Text style={{color: '#000', opacity: 0.5, marginTop: 10}}>
                  {item.title}
                </Text>
              </View>
              <Text style={{fontSize: 16, color: '#000', opacity: 0.5}}>
                <Icon name="time" size={18} />{' '}
                {moment(item.date).format('YYYY-MM-DD')}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 0,
                marginTop: 20,
              }}>
              <Image
                source={require('../assets/icons.png')}
                style={{width: 120, height: 60, resizeMode: 'contain'}}
              />
              <TouchableOpacity onPress={() => deleteTodoItem(index)}>
                <Text style={{fontSize: 16, color: '#F56B96'}}>
                  <Icon name="trash" size={18} /> Task Completed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({});
