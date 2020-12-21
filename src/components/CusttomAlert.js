import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modalbox';

import CusttomButton from './CusttomButton';
import AppText from './AppText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../config/screen-responsive';

function CAlert({
  isOpen,
  setIsOpen,
  title,
  subTitle,
  firstButtonTitle,
  secondButtonTitle,
  yesButton,
  cancelButton,
}) {
  const WIDTH = wp('100'); // screen width
  const HEIGHT = hp('100'); // screen height
  const lanscape = WIDTH > HEIGHT ? true : false; // screen orientation
  return (
    <Modal
      isOpen={isOpen}
      onClosed={() => setIsOpen(false)}
      style={[
        styles.modal,
        {width: lanscape ? '50%' : '75%', height: lanscape ? '30%' : '18%'},
      ]}
      position={'center'}
      backdropPressToClose={false}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
      <View style={{flexDirection: 'row', left: 5, bottom: -10}}>
        <CusttomButton title={firstButtonTitle} onPress={yesButton} />
        <CusttomButton title={secondButtonTitle} onPress={cancelButton} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    borderRadius: 20,
  },
  title: {
    fontFamily: 'Arabic',
    fontSize: 19,
    right: 15,
    top: -5,
  },
  subTitle: {
    fontFamily: 'Arabic',
    fontSize: 15,
    right: 15,
  },
});

export default class CusttomAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  setIsOpen = (value) => {
    this.setState({isOpen: value});
  };
  const;
  render() {
    return (
      <CAlert
        isOpen={this.state.isOpen}
        setIsOpen={this.setIsOpen}
        {...this.props}
      />
    );
  }
}
