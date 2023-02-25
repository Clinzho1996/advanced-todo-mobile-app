/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  ToastAndroid,
  Modal,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddTask = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todoItems, setTodoItems] = useState([]);
  const [todoTextTitle, setTodoTextTitle] = useState('');
  const [todoText, setTodoText] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addTodoItem = async () => {
    const newTodoItem = {
      date: selectedDate,
      text: todoText,
      title: todoTextTitle,
    };
    const updatedTodoItems = [...todoItems, newTodoItem];
    setTodoItems(updatedTodoItems);
    setTodoText('');
    setTodoTextTitle('');
    setIsCalendarVisible(false);
    setIsModalVisible(true);
    ToastAndroid.show('Task added successfully!', ToastAndroid.SHORT);
    try {
      await AsyncStorage.setItem('todoItems', JSON.stringify(updatedTodoItems));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodoItem = async index => {
    const updatedTodoItems = [...todoItems];
    updatedTodoItems.splice(index, 1);
    setTodoItems(updatedTodoItems);
    await AsyncStorage.deleteItem('todoList', JSON.stringify(todoItems));
    ToastAndroid.show('Task deleted successfully!', ToastAndroid.SHORT);
  };

  const renderCalendar = () => {
    return (
      <View style={{marginBottom: 10, marginHorizontal: 20}}>
        <CalendarPicker
          onDateChange={date => setSelectedDate(date)}
          dateFormat="YYYY-MM-DD"
          width={400}
          height={400}
          textStyle={{
            fontSize: 16,
            fontWeight: '400',
            color: 'black',
          }}
          selectedDayStyle={{
            backgroundColor: '#ee5067',
            borderRadius: 10,
          }}
          selectedDayTextStyle={{
            color: 'white',
          }}
          todayTextStyle={{
            fontWeight: 'bold',
            color: 'black',
          }}
          customDatesStyles={[
            {
              date: moment().subtract(1, 'days').toDate(),
              style: {backgroundColor: '#d8d8d8', borderRadius: 10},
              textStyle: {color: '#909090'},
            },
            {
              date: moment().add(1, 'days').toDate(),
              style: {backgroundColor: '#d8d8d8', borderRadius: 10},
              textStyle: {color: '#909090'},
            },
          ]}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsCalendarVisible(false)}>
          <Text style={styles.cta}>Select above date </Text>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('todoItems');
        if (jsonValue != null) {
          setTodoItems(JSON.parse(jsonValue));
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          color: '#020047',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        New Task
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: '#020047',
          marginTop: 20,
        }}>
        Task Name
      </Text>
      <TextInput
        value={todoText}
        onChangeText={setTodoText}
        placeholder="Task Title"
        placeholderTextColor="#c4c4c4"
        style={{
          backgroundColor: '#fff',
          elevation: 3,
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
          fontWeight: '500',
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: '#020047',
          marginTop: 20,
        }}>
        Description
      </Text>
      <TextInput
        value={todoTextTitle}
        onChangeText={setTodoTextTitle}
        placeholder="Task Details"
        placeholderTextColor="#c4c4c4"
        style={{
          backgroundColor: '#fff',
          elevation: 3,
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
          fontWeight: '500',
        }}
        maxLength={40}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: '#020047',
          marginTop: 20,
        }}>
        Task Date
      </Text>
      <TouchableOpacity
        onPress={() => setIsCalendarVisible(!isCalendarVisible)}>
        <Text
          style={{
            backgroundColor: '#fff',
            elevation: 3,
            borderRadius: 10,
            padding: 15,
            marginTop: 10,
            fontWeight: '500',
            color: '#c4c4c4',
          }}>
          Date:
          {moment(todoItems[todoItems.length - 1]?.date).format('YYYY-MM-DD')}
        </Text>
      </TouchableOpacity>
      <Modal
        visible={isCalendarVisible}
        animationType="slide"
        onRequestClose={() => setIsCalendarVisible(false)}>
        {renderCalendar()}
      </Modal>
      <TouchableOpacity onPress={addTodoItem} style={styles.button}>
        <Text style={styles.cta}>
          <Icon name="add" color="#fff" size={20} /> Add New Task
        </Text>
      </TouchableOpacity>
      <FlatList
        data={todoItems}
        keyExtractor={(item, index) => index.toString()}
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
              marginBottom: 10,
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
              <TouchableOpacity onPress={() => deleteTodoItem(index)}>
                <Text style={{fontSize: 16, color: '#F56B96'}}>
                  <Icon name="trash" size={18} /> Task Completed
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Tasks', {todoItems: todoItems})
                }>
                <Text>View to do</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFF',
    paddingHorizontal: 30,
    paddingVertical: 30,
    height: height,
  },
  button: {
    backgroundColor: '#ee5067',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  cta: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
