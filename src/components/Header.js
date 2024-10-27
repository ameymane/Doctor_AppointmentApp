import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
// import {FlatList} from 'react-native-gesture-handler';

const Header = ({title, icon, onClick}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backBtn}
        underlayColor="#DDDDDD"
        onPress={() => {
          onClick();
        }}>
        <Image source={icon} style={styles.backImg} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
    paddingLeft: 20,
  },
  backBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  backImg: {
    width: 25,
    height: 35,
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    color: '#4c669f',
    fontWeight: '600',
    fontFamily: 'PlaywriteGBS-Regular',
  },
});
