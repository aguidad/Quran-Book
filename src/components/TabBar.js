import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
  Extrapolate,
  withTiming,
} from 'react-native-reanimated';
import {
  Animated as an,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  Easing,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faClone,
  faHands,
  faTh,
  faBookOpen,
  faBookmark,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';
import Svg, {Path} from 'react-native-svg';
import * as shape from 'd3-shape';

import {Color} from '../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../config/screen-responsive';
import * as actions from '../config/redux/actions';
import {useDispatch, useStore} from 'react-redux';

let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;
let lanscape = WIDTH > HEIGHT ? true : false;
let dispatch;
let store;
let scrollTo;
let animatehidden;

const tabs = [
  {
    name: 'Hands',
    item: faHands,
    title: 'دعاء الختم',
    font: !lanscape ? HEIGHT * 0.028 : WIDTH * 0.035,
  },
  {
    name: 'Parts',
    item: faChartPie,
    title: 'الأحزاب\n',
    font: !lanscape ? HEIGHT * 0.028 : WIDTH * 0.04,
  },
  {
    name: 'Pages',
    item: faClone,
    title: 'الصفحات\n',
    font: !lanscape ? HEIGHT * 0.025 : WIDTH * 0.038,
  },
  {
    name: 'Home',
    item: faBookOpen,
    title: 'المصحف\n',
    font: !lanscape ? HEIGHT * 0.028 : WIDTH * 0.04,
  },
  {
    name: 'Contents',
    item: faTh,
    title: 'الفهرس\n',
    font: !lanscape ? HEIGHT * 0.028 : WIDTH * 0.04,
  },
  {
    name: 'reNotes',
    item: faBookmark,
    title: 'الرجوع الى العلامة',
    font: !lanscape ? HEIGHT * 0.014 : WIDTH * 0.024,
  },
  {
    name: 'Notes',
    item: faBookmark,
    title: 'حفظ علامة',
    font: !lanscape ? HEIGHT * 0.021 : WIDTH * 0.035,
  },
];

const getPath = () => {
  const tabWidth = WIDTH / tabs.length;
  const tab = shape.line().curve(shape.curveBasis)([
    [0, 0],
    [tabWidth / 4, 0],
    [tabWidth / 2, 30],
    [tabWidth, 60],
    [(tabWidth / 2) * 3, 30],
    [(tabWidth / 4) * 7, 0],
    [tabWidth * 2, 0],
  ]);
  return `${tab}`;
};

const styles = () =>
  StyleSheet.create({
    tab: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: !lanscape ? HEIGHT * 0.095 : HEIGHT * 0.2,
      zIndex: 2,
    },
    activeIcon: {
      backgroundColor: 'white',
      width: !lanscape ? WIDTH * 0.1 : WIDTH * 0.055,
      height: !lanscape ? HEIGHT * 0.055 : HEIGHT * 0.09,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

function Button({
  hezibIndex,
  sourahIndex,
  navigation,
  item,
  name,
  index,
  activeIndex,
  width,
  position,
  indicatorPosition,
}) {
  const staticIconStyle = useAnimatedStyle(() => {
    const visibility = interpolate(
      indicatorPosition.value,
      [
        position - width / 2,
        position - width / 8,
        position + width / 8,
        position + width / 2,
      ],
      [1, 0, 0, 1],
      Extrapolate.CLAMP,
    );
    return {
      opacity: visibility,
      transform: [{translateY: 10 * (1 - visibility)}],
    };
  });
  const hendelOnPress = () => {
    activeIndex.value = index;
    if (name === 'Notes') {
      dispatch(actions.addNote(store.getState().currentPage)); // make a note with current val
      setTimeout(() => {
        animatehidden(Easing.sin);
        activeIndex.value = 3;
      }, 1000);
    } else if (name === 'reNotes') {
      if (store.getState().marker !== -1) scrollTo(store.getState().marker); // getted the saved marker
      setTimeout(() => {
        animatehidden(Easing.sin);
        activeIndex.value = 3;
      }, 1000);
    } else if (name === 'Contents') {
      setTimeout(() => {
        navigation.navigate('Content', {
          position: sourahIndex,
        });
        activeIndex.value = 3;
      }, 500);
    } else if (name === 'Pages') {
      setTimeout(() => {
        navigation.navigate('Search'); // goto the content screen
        activeIndex.value = 3;
      }, 500);
    } else if (name === 'Parts') {
      setTimeout(() => {
        navigation.navigate('Hezib', {hposition: hezibIndex}); // goto the content screen
        activeIndex.value = 3;
      }, 500);
    } else if (name === 'Hands') {
      setTimeout(() => {
        navigation.navigate('Douaa'); // goto the content screen
        activeIndex.value = 3;
      }, 500);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={hendelOnPress}>
      <View style={styles().tab}>
        <Animated.View style={staticIconStyle}>
          <FontAwesomeIcon
            icon={item}
            color={name === 'Notes' ? Color.note : 'black'}
            size={28}
          />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

function ActiveIcon({name, item, title, font, index, activeIndex, width}) {
  const val = !lanscape ? 100 : 120;
  const circleIconStyle = useAnimatedStyle(() => {
    const isActive = index === activeIndex.value;
    const yOffset = isActive ? 0 : val;
    return {
      transform: [
        {
          translateY: withTiming(yOffset),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          width: width + 0,
          top: -8,
          left: width / 2,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 5,
        },
        circleIconStyle,
      ]}>
      <View style={styles().activeIcon}>
        <FontAwesomeIcon
          icon={item}
          color={name === 'Notes' ? Color.note : 'black'}
          size={29}
        />
      </View>
      <Text
        numberOfLines={2}
        style={{
          width: width,
          fontWeight: '900',
          fontFamily: 'Arabic',
          alignSelf: 'center',
          textAlign: 'center',
          fontSize: font,
          margin: !lanscape ? 11 : 20,
        }}>
        {title}
      </Text>
    </Animated.View>
  );
}

const Bar = (props) => {
  WIDTH = wp('100');
  HEIGHT = hp('100');
  const activeIndex = useSharedValue(3);
  const tabWidth = WIDTH / tabs.length;
  const d = getPath();
  lanscape = WIDTH > HEIGHT ? true : false;
  store = useStore();
  dispatch = useDispatch();
  scrollTo = props.scrollToIndex;
  animatehidden = props.animatehidden;

  const indicatorPosition = useDerivedValue(() => {
    return withTiming(activeIndex.value * tabWidth + tabWidth / 2, {
      duration: 500,
    });
  });

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: indicatorPosition.value}],
    };
  });

  return (
    <>
      <Animated.View
        style={[{position: 'absolute', left: -tabWidth}, indicatorStyle]}>
        {tabs.map((tab, index) => (
          <ActiveIcon
            index={index}
            activeIndex={activeIndex}
            name={tab.name}
            item={tab.item}
            title={tab.title}
            font={tab.font}
            width={tabWidth}
            key={`fg-${index}`}
          />
        ))}
        <Svg width={tabWidth * 2} height={64}>
          <Path fill={Color.primary} {...{d}} />
        </Svg>
      </Animated.View>
      {tabs.map((tab, index) => {
        const position = tabWidth * index + tabWidth / 2; // item center
        return (
          <Button
            hezibIndex={props.hezibIndex}
            sourahIndex={props.sourahIndex}
            navigation={props.navigation}
            index={index}
            activeIndex={activeIndex}
            name={tab.name}
            item={tab.item}
            width={tabWidth}
            indicatorPosition={indicatorPosition}
            position={position}
            key={`bg-${index}`}
          />
        );
      })}
    </>
  );
};
export default class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      sourahIndex: 0,
      hezibIndex: 0,
    };
  }
  setHezibIndex = (position) => {
    this.setState({hezibIndex: position});
  };
  setSourahIndex = (position) => {
    this.setState({sourahIndex: position});
  };

  setIsShow = (boolean) => {
    this.setState({isShow: boolean});
  };
  render() {
    return this.state.isShow ? (
      <an.View style={[this.props.buttomBarStyle, this.props.animatedStyles]}>
        <Bar
          {...this.props}
          sourahIndex={this.state.sourahIndex}
          hezibIndex={this.state.hezibIndex}
        />
      </an.View>
    ) : null;
  }
}
