import React, {useEffect, useState} from 'react';
import {
  Animated,
  BackHandler,
  ImageBackground,
  Pressable,
  Text,
  useWindowDimensions,
} from 'react-native';
import {DataProvider, RecyclerListView, LayoutProvider} from 'recyclerlistview';

import {Color} from '../config/color';
import {contentHezib} from '../config/hezib';

// create new animation component enspire from flatlist
const AnimatedFlatList = Animated.createAnimatedComponent(RecyclerListView);

// render item of the flatlist
const RenderItem = ({item, y, index, position_}) => {
  const {width, height} = useWindowDimensions();
  const CARD_height = width > height ? height * 0.68 : height * 0.285;
  const position = Animated.subtract(index * CARD_height, y);
  const isDisappearing =
    width > height ? -CARD_height + 150 : -CARD_height + 50;
  const isTop = 0;
  const isBottom = height - CARD_height;
  const isAppearing = height - 64;

  // animate Y
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, index * CARD_height],
        outputRange: [0, -index * CARD_height],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_height / 4],
      extrapolate: 'clamp',
    }),
  );
  // animate scale
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  // animate opacity
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });
  return (
    <Animated.View
      style={[
        {
          width: width,
          height: width > height ? height * 0.7 : height * 0.3,
          margin: -5,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
        },
        {opacity, transform: [{translateY}, {scale}]},
      ]}>
      {item.map((item) => (
        <Pressable
          onPress={() => position_(item.start)}
          style={{
            borderRadius: 30,
            width: width > height ? width * 0.2 : width * 0.3,
            height: width > height ? height * 0.35 : height * 0.17,
            backgroundColor: Color.primary,
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: 'black',
          }}
          key={item.title}>
          <Text
            style={{
              fontSize: width > height ? height * 0.05 : height * 0.03,
              textAlign: 'center',
              fontFamily: 'Arabic',
              margin: 5,
            }}>{`${item.title}\n${item.start}`}</Text>
        </Pressable>
      ))}
    </Animated.View>
  );
};

export default function ContentsScreen({route, navigation}) {
  const {width, height} = useWindowDimensions();
  const y = new Animated.Value(0);
  let pagenum;

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

  //ScrollToIndex(route.params.hposition);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });

  // list of images that render in scroll list
  const [list] = useState(
    new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
      contentHezib().map((n) => ({type: 'NORMAL', ...n})),
    ),
  );

  // layout to match with our array
  const layoutProvider = new LayoutProvider(
    (i) => {
      return list.getDataForIndex(i).type;
    },
    (type, dim) => {
      switch (type) {
        case 'NORMAL':
          dim.width = width;
          dim.height = width > height ? height * 0.68 : height * 0.285;
          break;
      }
    },
  );

  let position_ = (title) => {
    navigation.navigate('Home', {
      key: 'h',
      hezib: title,
      hposition: pagenum,
    });
  };

  const onScrollEnd = (e) => {
    let contentOffset = e.nativeEvent.contentOffset;
    pagenum = contentOffset.y;
  };

  return (
    <ImageBackground
      source={require('../assets/images/book.jpeg')}
      style={{width, height}}>
      <AnimatedFlatList
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        initialOffset={route.params.hposition}
        rowRenderer={(type, {item}, index) => (
          <RenderItem
            {...{index, y, item}}
            navigation={navigation}
            position_={position_}
          />
        )}
        dataProvider={list}
        layoutProvider={layoutProvider}
        // ref={(flatlist) => setFlatRef(flatlist)}
        // initialNumToRender={5}
        // showsVerticalScrollIndicator={false}
        // onMomentumScrollEnd={onScrollEnd}
        // //contentOffset={{ x: 100, y: 10500 }}
        // data={contentHezib()}
        // renderItem={({ item: { item }, index }) => (
        //   <RenderItem
        //     {...{ index, y, item }}
        //     navigation={navigation}
        //     position_={position_}
        //   />
        // )}
        // keyExtractor={(item, index) => "" + index}
        {...{onScroll}}
      />
    </ImageBackground>
  );
}
