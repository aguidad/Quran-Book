import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {Color} from '../config/color';

function Oriontation({goToHome, isLoding, changeOrientation}) {
  const Button = ({icon, text, orientation}) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (orientation) changeOrientation();
          else {
            goToHome(true);
            isLoding(false);
          }
        }}>
        <Ionicons name={icon} size={120} color="black" />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {margin: 16}]}>إختر نمط القراءة</Text>
      <View
        style={{
          width: Dimensions.get('window').width,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button icon="ios-phone-portrait" text="عمودي" orientation={false} />
        <Button icon="ios-phone-landscape" text="أفقي" orientation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    paddingBottom: 60,
    justifyContent: 'center',
  },
  button: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Color.sky,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Arabic',
    fontSize: Dimensions.get('window').height * 0.03,
    textAlign: 'center',
  },
  image: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.15,
    marginBottom: 15,
  },
});
export default Oriontation;
