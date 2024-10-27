import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/success.png')}
        style={styles.successImg}
      />
      <Text style={styles.msg}>{'Your appointment successfully booked'}</Text>
      <TouchableOpacity style={styles.gotoHome} onPress={()=>{
        navigation.navigate('Home')
      }}>
        <Text style={styles.gohomeTxt}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successImg: {
    width: 100,
    height: 100,
  },
  msg: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
    color: '#838383',
  },
  gotoHome: {
    width: 150,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    marginTop: 30,
  },
  gohomeTxt: {
    fontSize: 15,
    color: '#838383',
  },
});
