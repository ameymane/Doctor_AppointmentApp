import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const Data = [
  {
    id: '1',
    name: 'Dr Patrick',
    time: '10:20 PM',
    image: require('../images/doctorImg/doctor1.png'),
  },
  {
    id: '2',
    name: 'Dr Corrie',
    time: '08:10 PM',
    image: require('../images/doctorImg/doctor2.png'),
  },
  {
    id: '3',
    name: 'Dr Mark',
    time: '11:40 AM',
    image: require('../images/doctorImg/doctor3.png'),
  },
  {
    id: '4',
    name: 'Dr John',
    time: '03:20 PM',
    image: require('../images/doctorImg/doctor4.png'),
  },
];

const Pending = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={styles.itemView}>
      <Image source={item.image} style={styles.docImg} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.timing}>{item.time}</Text>
      </View>
      <Text style={styles.status}>{'Pending'}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Header
        icon={require('../images/icons/back.png')}
        title={'Pending Appointments'}
        onClick={() => {
          navigation.goBack();
        }}
      />
      <View>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Pending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: '94%',
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
    borderColor: '#000',
    borderWidth: 0.2,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    color: '#838383',
  },
  timing: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 20,
    color: '#838383',
    marginTop: 5,
  },
  status: {
    marginLeft: 60,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    color: '#dc143c',
    padding: 5,
    fontWeight: '500',
  },
});
