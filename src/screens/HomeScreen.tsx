import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomIcon from '../components/CustomIcon';

const HomeScreen = () => {
  return (
    <View>
      <Text style={{color: 'black'}}>
        <CustomIcon name="cart" size={25} />
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
