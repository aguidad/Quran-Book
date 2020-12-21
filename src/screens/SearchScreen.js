import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  BackHandler,
  Alert,
} from 'react-native';
import RNExitApp from 'react-native-exit-app';

import {Color} from '../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../config/screen-responsive';
import AppTextInput from '../components/AppTextInput';

const SearchScreen = ({navigation}) => {
  const WIDTH = wp('100'); // screen width
  const HEIGHT = hp('100'); // screen height
  const lanscape = WIDTH > HEIGHT ? true : false; // screen orientation
  const [value, setValue] = useState('');
  const [isVisible, setIsvisible] = useState(false);
  const [isMakeAlert, setMakeAlert] = useState(true);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });

  const hendelSetValue = (value) => {
    setValue(value);
    if (2 <= +value && +value <= 607) {
      setIsvisible(true);
      setMakeAlert(true);
    } else {
      setIsvisible(false);
      value !== '' ? setMakeAlert(false) : setMakeAlert(true);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <AppTextInput
        icon="md-search"
        onChangeText={hendelSetValue}
        placeholder="الصفحات من 2 الى 607"
        keyboardType="numeric"
        maxLength={3}
        disableFullscreenUI={true}
      />
      <View style={{width: WIDTH * 0.8, alignItems: 'flex-end'}}>
        <Text
          style={[
            styles.alert,
            {
              fontSize: lanscape ? HEIGHT * 0.05 : HEIGHT * 0.027,
              color: !isMakeAlert ? 'tomato' : Color.primary,
            },
          ]}>
          هذه الصفحة لاتوجد
        </Text>
      </View>
      <TouchableOpacity
        disabled={!isVisible}
        style={{
          width: 150,
          height: 50,
          borderRadius: 20,
          backgroundColor: !isVisible ? 'white' : '#9aedab',
          justifyContent: 'center',
          borderColor: Color.sky,
          borderWidth: 2,
        }}
        onPress={() => {
          navigation.navigate('Home', {key: 'p', page: value});
        }}>
        <Text
          style={{
            fontSize: lanscape ? HEIGHT * 0.05 : HEIGHT * 0.027,
            textAlign: 'center',
            fontFamily: 'Arabic',
          }}>
          الذهاب إلى الصفحة
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.primary,
  },
  alert: {
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'Arabic',
  },
  search: {},
});
export default SearchScreen;
