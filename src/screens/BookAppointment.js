import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import CommonBtn from '../components/CommonBtn';


const Data = [
  {id: '1', slot: '10:00AM-12:00PM'},

  {id: '2', slot: '12:00AM-02:00PM'},

  {id: '3', slot: '02:00AM-04:00PM'},

  {id: '4', slot: '04:00AM-06:00PM'},

  {id: '5', slot: '06:00AM-08:00PM'},

  {id: '6', slot: '08:00AM-11:00PM'},
];
let DaysList = [];
const BookAppointment = ({navigation}) => {
  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedDay, setSelectedDay] = useState(-1);

  const [days, setDays] = useState([]);
  useEffect(() => {
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({day: i, selected: false});
    }
    setDays(DaysList);
  }, []);
  const getDays = month => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    } else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 30;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    } else if (month == 12) {
      days = 31;
    }
    return days;
  };
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.timeSlot,
        {borderColor: selectedSlot == index ? '#1A998E' : '#808080'},
      ]}
      onPress={() => {
        setSelectedSlot(index);
      }}>
      <Text style={{color: selectedSlot == index ? '#1A998E' : '#808080'}}>
        {item.slot}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Header
        icon={require('../images/icons/back.png')}
        title={'Book Appointment'}
        onClick={() => {
          navigation.goBack();
        }}
      />
      <ScrollView nestedScrollEnabled contentContainerStyle={{paddingBottom: 20}}>
        <Image
          source={require('../images/doctorImg/doctor2.png')}
          style={styles.docImg}
        />
        <Text style={styles.docName}>Dr Corrie</Text>
        <Text style={styles.spcl}>Skin specialist</Text>
        <Text style={styles.heading}>Select Date</Text>
        <View style={{marginTop: 20}}>
          <FlatList
          nestedScrollEnabled
            data={days}
            horizontal
            showsHorizontalScrollIndicator={false}
            // keyExtractor={({item,index})=>index}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={[
                  styles.daysBtn,
                  {
                    backgroundColor: selectedDay == index ? '#1A998E' : '#fff',
                    borderWidth: selectedDay == index ? 0 : 1,
                  },
                ]}
                onPress={() => {
                  if (item.day < new Date().getDate()) {
                  } else {
                    setSelectedDay(index);
                  }
                }}>
                <Text
                  style={[
                    styles.dayTxt,
                    {color: selectedDay == index ? '#fff' : '#1A998E'},
                  ]}>
                  {item.day}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={styles.heading}>Available Slots</Text>
        <View>
          <FlatList nestedScrollEnabled numColumns={2} data={Data} renderItem={renderItem} />
        </View>
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput
          style={styles.nameInput}
          placeholder="Enter your name"
          placeholderTextColor={'#000'}
        />
        <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.genderView}>
          <TouchableOpacity
            style={[
              styles.genderBtn,
              {borderColor: selectedGender == 0 ? '#1A998E' : '#838383'},
            ]}
            onPress={() => {
              setSelectedGender(0);
            }}>
            <Image
              source={require('../images/icons/man.png')}
              style={styles.genderTypeImg}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderBtn,
              {borderColor: selectedGender == 1 ? '#1A998E' : '#838383'},
            ]}
            onPress={() => {
              setSelectedGender(1);
            }}>
            <Image
              source={require('../images/icons/women.png')}
              style={styles.genderTypeImg}
            />
          </TouchableOpacity>
        </View>
        <CommonBtn
          w={200}
          h={50}
          txt={'Book Now'}
          status={true}
          onClick={() => {
            navigation.navigate('Success');
          }}
        />
      </ScrollView>
    </View>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  docImg: {
    height: 100,
    width: 100,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 50,
    borderColor: '#1A998E',
    borderWidth: 1.5,
    resizeMode: 'contain',
  },
  docName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginTop: 10,
    alignSelf: 'center',
  },
  spcl: {
    fontSize: 18,
    fontWeight: '700',
    color: 'green',
    alignSelf: 'center',
    backgroundColor: '#f2f2f2',
    padding: 3,
    borderRadius: 10,
    marginTop: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginTop: 15,
    marginLeft: 15,
  },
  timeSlot: {
    width: '44.5%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameInput: {
    width: '95%',
    height: 45,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 20,
    color: '#838383',
  },
  genderTypeImg: {
    width: 24,
    height: 24,
  },
  genderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
    marginTop: 10,
  },
  genderBtn: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    marginBottom: 5,
  },
  daysBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayTxt: {
    fontSize: 18,
    fontWeight: '700',
  },
});
