/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 120}}>
      {/* Intro */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: 20, fontWeight: '600', color: '#020047'}}>
            Hi, Dev-Clinton
          </Text>
          <Text style={{color: '#000', opacity: 0.5}}>
            What are your plans for today ?
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../assets/user.png')}
            style={{width: 70, height: 70}}
          />
        </TouchableOpacity>
      </View>
      {/* To Do Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#A390F3',
            padding: 15,
            borderRadius: 10,
            marginRight: 15,
            width: 120,
          }}>
          <View
            style={{
              position: 'absolute',
              right: 10,
              top: 10,
            }}>
            <Icon name="play" size={20} color="#fff" />
          </View>
          <Icon name="briefcase" size={30} color="#fff" />
          <View style={{marginTop: 20}}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              Work
            </Text>
            <Text style={{color: '#fff', fontSize: 14, fontWeight: 'thin'}}>
              10 Items
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FEBB6B',
            padding: 15,
            borderRadius: 10,
            marginRight: 15,
            width: 120,
          }}>
          <View
            style={{
              position: 'absolute',
              right: 10,
              top: 10,
            }}>
            <Icon name="play" size={20} color="#fff" />
          </View>
          <Icon name="people" size={30} color="#fff" />
          <View style={{marginTop: 20}}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              Personal
            </Text>
            <Text style={{color: '#fff', fontSize: 14, fontWeight: 'thin'}}>
              5 Items
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#A390F3',
            padding: 15,
            borderRadius: 10,
            marginRight: 15,
            width: 120,
          }}>
          <View
            style={{
              position: 'absolute',
              right: 10,
              top: 10,
            }}>
            <Icon name="play" size={20} color="#fff" />
          </View>
          <Icon name="home" size={30} color="#fff" />
          <View style={{marginTop: 20}}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              Church
            </Text>
            <Text style={{color: '#fff', fontSize: 14, fontWeight: 'thin'}}>
              15 Items
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#71DAF7',
            padding: 15,
            borderRadius: 10,
            marginRight: 15,
            width: 120,
          }}>
          <View
            style={{
              position: 'absolute',
              right: 10,
              top: 10,
            }}>
            <Icon name="play" size={20} color="#fff" />
          </View>
          <Icon name="book" size={30} color="#fff" />
          <View style={{marginTop: 20}}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              Study
            </Text>
            <Text style={{color: '#fff', fontSize: 14, fontWeight: 'thin'}}>
              8 Items
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      {/* ALL Task */}
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20, fontWeight: '600', color: '#020047'}}>
          My Task
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#F56B96', fontWeight: 'bold', fontSize: 16}}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      {/* Schedules */}
      <View>
        <View
          style={{
            marginTop: 20,
            elevation: 3,
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginHorizontal: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#020047'}}>
                Meeting
              </Text>
              <Text style={{color: '#000', opacity: 0.5, marginTop: 10}}>
                Discuss team tasks for the day
              </Text>
            </View>
            <Text style={{fontSize: 16, color: '#000', opacity: 0.5}}>
              <Icon name="time" size={18} /> 10:00 am
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
            <TouchableOpacity>
              <Text style={{fontSize: 16, color: '#F56B96'}}>
                <Icon name="person" size={18} /> Add Members
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            elevation: 3,
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginHorizontal: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#020047'}}>
                Client Meeting
              </Text>
              <Text style={{color: '#000', opacity: 0.5, marginTop: 10}}>
                Feedback & Project review
              </Text>
            </View>
            <Text style={{fontSize: 16, color: '#000', opacity: 0.5}}>
              <Icon name="time" size={18} /> 11:00 am
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
            <TouchableOpacity>
              <Text style={{fontSize: 16, color: '#F56B96'}}>
                <Icon name="person" size={18} /> Add Members
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            elevation: 3,
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginHorizontal: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#020047'}}>
                Make Prototypes
              </Text>
              <Text style={{color: '#000', opacity: 0.5, marginTop: 10}}>
                Do the prototypes and send
              </Text>
            </View>
            <Text style={{fontSize: 16, color: '#000', opacity: 0.5}}>
              <Icon name="time" size={18} /> 10:00 am
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
            <TouchableOpacity>
              <Text style={{fontSize: 16, color: '#F56B96'}}>
                <Icon name="person" size={18} /> Add Members
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            elevation: 3,
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginHorizontal: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#020047'}}>
                Make Prototypes
              </Text>
              <Text style={{color: '#000', opacity: 0.5, marginTop: 10}}>
                Do the prototypes and send
              </Text>
            </View>
            <Text style={{fontSize: 16, color: '#000', opacity: 0.5}}>
              <Icon name="time" size={18} /> 10:00 am
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
            <TouchableOpacity>
              <Text style={{fontSize: 16, color: '#F56B96'}}>
                <Icon name="person" size={18} /> Add Members
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
