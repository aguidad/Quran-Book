import React, {useEffect} from 'react';
import {
  BackHandler,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Color} from '../config/color';
import {douaa} from '../config/duaa';
function DouaaScreen({navigation}) {
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
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[styles.text, styles.header]}>
          دُعَاءُ خَتْمِ القُرْآنِ الكَريمِ
        </Text>
        {douaa.split('*').map((douaa, index) => (
          <Text key={'key-' + index} style={styles.text}>
            <Text style={[styles.text, {color: 'tomato'}]}>{'اللَّهُمَّ'}</Text>
            {douaa}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Arabic',
    fontSize: Dimensions.get('window').height * 0.03,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    color: 'tomato',
    fontSize: Dimensions.get('window').height * 0.035,
  },
});
export default DouaaScreen;
