import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';
// import { FlatList } from 'react-native-gesture-handler';

const Data = [
  {
    id: '1',
    name: 'Dr Patrick',
    time: '10:20 PM',
    image: require('../images/doctorImg/doctor1.png'),
    rate: '5.0',
    rateImage: require('../images/icons/rate.png'),
  },
  {
    id: '2',
    name: 'Dr Corrie',
    time: '08:10 PM',
    image: require('../images/doctorImg/doctor2.png'),
    rate: '5.0',
    rateImage: require('../images/icons/rate.png'),
  },
  {
    id: '3',
    name: 'Dr Mark',
    time: '11:40 AM',
    image: require('../images/doctorImg/doctor3.png'),
    rate: '5.0',
    rateImage: require('../images/icons/rate.png'),
  },
  {
    id: '4',
    name: 'Dr John',
    time: '03:20 PM',
    image: require('../images/doctorImg/doctor4.png'),
    rate: '4.0',
    rateImage: require('../images/icons/rate1.png'),
  },
  {
    id: '5',
    name: 'Dr Patrick',
    time: '10:20 PM',
    image: require('../images/doctorImg/doctor1.png'),
    rate: '4.0',
    rateImage: require('../images/icons/rate1.png'),
  },
  {
    id: '6',
    name: 'Dr Corrie',
    time: '08:10 PM',
    image: require('../images/doctorImg/doctor2.png'),
    rate: '4.0',
    rateImage: require('../images/icons/rate1.png'),
  },
  {
    id: '7',
    name: 'Dr Mark',
    time: '11:40 AM',
    image: require('../images/doctorImg/doctor3.png'),
    rate: '4.0',
    rateImage: require('../images/icons/rate1.png'),
  },
  {
    id: '8',
    name: 'Dr John',
    time: '03:20 PM',
    image: require('../images/doctorImg/doctor4.png'),
    rate: '4.0',
    rateImage: require('../images/icons/rate1.png'),
  },
];

const Catagory = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={styles.TopCatagoryDoc}>
      <Image source={item.image} style={styles.docImg} />
      <View>
        <Text style={styles.docName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <Image source={item.rateImage} style={styles.rateImg} />
          <Text style={styles.rateTxt}>{item.rate}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Header
        icon={require('../images/icons/back.png')}
        title={'Top Catagory Doctors'}
        onClick={() => {
          navigation.goBack();
        }}
      />

      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Catagory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
  },
  TopCatagoryDoc: {
    width: '90%',
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  docImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 10,
    borderColor: '#000',
    borderWidth: 0.2,
    resizeMode: 'contain',
  },
  docName: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
    marginLeft: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  rateImg: {
    width: 60,
    height: 20,
    resizeMode: 'cover',
  },
  rateTxt: {
    fontSize: 12,
    color: '#000',
    marginLeft: 5,
  },
});
