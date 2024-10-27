import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import CommonBtn from '../components/CommonBtn';
// import {ScrollView} from 'react-native-gesture-handler';

const DATA = [
  {id: '1', category: 'Neurology'},
  {id: '2', category: 'Urology'},
  {id: '3', category: 'Psychiatry'},
  {id: '4', category: 'Radiology'},
  {id: '5', category: 'Surgery'},
];
const DoctorData = [
  {
    id: '1',
    name: 'Dr Patrick',
    speciality: 'Skin Specialist',
    image: require('../images/doctorImg/doctor1.png'),
  },
  {
    id: '2',
    name: 'Dr Corrie',
    speciality: 'Skin Specialist',
    image: require('../images/doctorImg/doctor2.png'),
  },
  {
    id: '3',
    name: 'Dr Mark',
    speciality: 'Skin Specialist',
    image: require('../images/doctorImg/doctor3.png'),
  },
  {
    id: '4',
    name: 'Dr John',
    speciality: 'Skin Specialist',
    image: require('../images/doctorImg/doctor4.png'),
  },
  {
    id: '5',
    name: 'Dr DSouza',
    speciality: 'Skin Specialist',
    image: require('../images/doctorImg/doctor5.png'),
  },
  {
    id: '6',
    name: 'Dr Neck',
    speciality: 'Skin Specialist',
    image: require('../images/doctorImg/doctor6.png'),
  },
];

const Home = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Catagory');
      }}>
      <LinearGradient
        colors={['#1A998E', '#1A998E']}
        style={styles.linearGradient}>
        <Text style={styles.catName}>{item.category}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
  const renderItem1 = ({item, index}) => (
    <View style={styles.docItem}>
      <Image source={item.image} style={styles.docImg} />
      <Text style={styles.docName}>{item.name}</Text>
      <Text style={styles.docSpeciality}>{item.speciality}</Text>
      <Text
        style={[
          styles.status,
          {
            color: index / 2 == 0 ? 'green' : 'red',
            opacity: index / 2 == 0 ? 1 : 0.4,
          },
        ]}>
        {index / 2 == 0 ? 'Available' : 'Busy'}
      </Text>
      <CommonBtn
        w={120}
        h={35}
        txt={'Book Appointment'}
        status={index / 2 == 0 ? true : false}
        onClick={() => {
          if (index / 2 == 0) {
            navigation.navigate('BookAppointment');
          }
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        title={'Appointo'}
        icon={require('../images/medicalLogo2.png')}
        onClick={() => {}}
      />
      <FlatList
        ListHeaderComponent={
          <View>
            <Image
              source={require('../images/AppointmentBanner.png')}
              style={styles.banner}
            />
            <Text style={[styles.heading, {marginTop: 5}]}>
              Select Category
            </Text>
            <View>
              <FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={renderItem}
              />
            </View>
            <Text style={[styles.heading, {marginTop: 20}]}>
              Top Rated Doctors
            </Text>
          </View>
        }
        numColumns={2}
        data={DoctorData}
        keyExtractor={item => item.id}
        renderItem={renderItem1}
      />
      <View style={styles.bottomTab}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Completed');
          }}>
          <Image
            source={require('../images/icons/completed.png')}
            style={styles.bottomtabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Pending');
          }}>
          <Image
            source={require('../images/icons/pending.png')}
            style={styles.bottomtabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Ambulance');
          }}>
          <Image
            source={require('../images/icons/ambulance.png')}
            style={[styles.bottomtabIcon, {height: 35, width: 35}]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '95%',
    height: 220,
    borderRadius: 10,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginLeft: 15,
  },
  catName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  linearGradient: {
    width: 120,
    height: 60,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  docItem: {
    width: '44.5%',
    // height: 180,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  docImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: '#add8e6',
    alignSelf: 'center',
    marginTop: 10,
    resizeMode: 'center',
  },
  docName: {
    fontSize: 16,
    color: '#000',
    alignSelf: 'center',
    fontWeight: '700',
    marginTop: 5,
  },
  docSpeciality: {
    fontSize: 15,
    color: 'green',
    fontWeight: '500',
    alignSelf: 'center',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
  },
  bottomTab: {
    width: '90%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    elevation: 5,
    bottom: 18,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomtabIcon: {
    width: 25,
    height: 25,
  },
});
