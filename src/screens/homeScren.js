import React, {createRef, useCallback, useEffect, useState} from 'react';
import {
  Animated,
  Image,
  View,
  Easing,
  TouchableWithoutFeedback,
  BackHandler,
  Alert,
  Text,
} from 'react-native';
import {Asset} from 'expo-asset';
import AppLoading from 'expo-app-loading';
import {useDispatch, useStore} from 'react-redux';
import {DataProvider, RecyclerListView, LayoutProvider} from 'recyclerlistview';
import RNExitApp from 'react-native-exit-app';

import QuranPages from '../config/QuranPages';
import TabBar from '../components/TabBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../config/screen-responsive';
import ZoomView from '../components/ZoomView';
import TopBar from '../components/TopBar';
import NoteScreen from '../screens/NoteScreen';
import Toast from '../components/Toast';
import * as actions from '../config/redux/actions';
import {
  getSourahPageByName,
  getHezibPageByName,
  PageNum,
} from '../config/QuranContent';
import CusttomAlert from '../components/CusttomAlert';
import TextEditor from '../components/TextEditor';

function HomeScreen({route, navigation}) {
  useEffect(() => {
    const backAction = () => {
      alertRef.current.setIsOpen(true);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    if (route.params?.key === 's') {
      const index = getSourahPageByName(route.params.sourah);
      setTimeout(() => {
        ScrollToIndex(index);
      }, 10);
      bottomBarRef.current.setSourahIndex(route.params.position);
      animatehidden(Easing.sin);
    } else if (route.params?.key === 'h') {
      const index = getHezibPageByName(route.params.hezib);
      setTimeout(() => {
        ScrollToIndex(index);
      }, 10);
      animatehidden(Easing.sin);
      bottomBarRef.current.setHezibIndex(route.params.hposition);
    } else if (route.params?.key === 'p') {
      setTimeout(() => {
        ScrollToIndex(PageNum - route.params.page);
      }, 10);
      animatehidden(Easing.sin);
    }
    return () => backHandler.remove();
  });
  /** ******** declaration part ********* */
  const WIDTH = wp('100'); // screen width
  const HEIGHT = hp('100'); // screen height
  const lanscape = WIDTH > HEIGHT ? true : false; // screen orientation
  const [recyclerRef, setRcyclerRef] = useState(null); // state to hendel scrollTo
  const [isReady, setIsReady] = useState(false); // state to hendel scrollTo
  const currentPage = useStore(); // current with non update
  const dispatch = useDispatch(); // dispatch the store with new update
  const bottomBarRef = createRef();
  const topBarRef = createRef();
  const alertRef = createRef();
  const marginRef = createRef();
  // ButtomBar style
  const buttomBarStyle = {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: wp('100'),
    height: lanscape ? hp('22') : hp('10'),
    alignSelf: 'flex-end',
    margin: lanscape ? hp('78') : hp('90'),
    zIndex: 5,
  };
  // TopBar style
  const topBarStyle = {
    position: 'absolute',
    width: wp('100'),
    height: lanscape ? hp('15') : hp('10'),
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    zIndex: 1,
  };

  let opacity = new Animated.Value(1); // opacity animation
  const animatedStyles = {opacity}; // animation style put it in the component that you need to animate
  /** ****************** */

  /** ****************** */

  async function _cacheResourcesAsync() {
    const image = QuranPages.find(
      (item) => item.item.id === PageNum - currentPage.getState().currentPage,
    ).item.image;
    return Promise.all(Asset.fromModule(image).downloadAsync());
  }

  // show a top and buttom bar with animation
  const animateShow = (easing) => {
    // display the bars before change opacity
    bottomBarRef.current.setIsShow(true);
    topBarRef.current.setIsShow(true);
    marginRef.current.setIsShow(true);

    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      easing,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) opacity.setValue(1);
    });
  };

  // hidden a top and buttom bar with animation
  const animatehidden = (easing) => {
    opacity.setValue(1);
    Animated.timing(opacity, {
      toValue: 0,
      duration: 100,
      easing,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        opacity.setValue(0);
        // get ref and remove the comp insted of hidden
        bottomBarRef.current.setIsShow(false);
        topBarRef.current.setIsShow(false);
        marginRef.current.setIsShow(false);
      }
    });
  };

  // list of images that render in scroll list
  const [list] = useState(
    new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(QuranPages),
  );
  // this arrow funtion to scroll into specifec index
  const ScrollToIndex = (index) => {
    dispatch(actions.updateCurrentPage(index));
    recyclerRef.scrollToIndex(index);
  };

  // layout to match with our array
  const layoutProvider = new LayoutProvider(
    (i) => {
      return list.getDataForIndex(i).type;
    },
    (type, dim) => {
      switch (type) {
        case 'NORMAL':
          dim.width = WIDTH;
          dim.height = HEIGHT;
          break;
      }
    },
  );

  const changeThePage = useCallback(
    (update) => dispatch(actions.updateCurrentPage(update)),
    [dispatch],
  );

  // arrow function to calculate the current page index in recyclelistview
  const onScrollEnd = (e) => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;
    let pageNum = Math.round(contentOffset.x / viewSize.width);
    changeThePage(pageNum);
  };

  const hendelOnPress = () => {
    opacity._value !== 1
      ? animateShow(Easing.quad)
      : animatehidden(Easing.quad);
  };

  // display image in lanscape or portrait mode depende on the orientation
  const Page = ({item, id}) => {
    const image = item.image;
    return lanscape ? (
      <ZoomView
        hendelOnPress={hendelOnPress}
        source={image}
        zoomHeight={HEIGHT}
        zoomWidth={WIDTH}
      />
    ) : (
      <TouchableWithoutFeedback onPress={hendelOnPress} key={'key-' + id}>
        <Image
          source={image}
          style={{width: WIDTH, height: HEIGHT}}
          resizeMode="stretch"
        />
      </TouchableWithoutFeedback>
    );
  };

  // fuction component for render the top bar
  const RenderTopBar = () => {
    return (
      <TopBar
        ref={topBarRef}
        topBarStyle={topBarStyle}
        animatedStyles={animatedStyles}
      />
    );
  };

  // fuction component for render the bottom bar
  const RenderButtomBar = () => {
    return (
      <TabBar
        ref={bottomBarRef}
        buttomBarStyle={buttomBarStyle}
        animatedStyles={animatedStyles}
        animatehidden={animatehidden}
        scrollToIndex={ScrollToIndex}
        navigation={navigation}
      />
    );
  };

  // make note in page
  const RenderBookmarker = () => {
    return <NoteScreen />;
  };

  const RenderToast = () => {
    return <Toast hendelOnPress={hendelOnPress} />;
  };

  const Margin = () => {
    return <TextEditor ref={marginRef} animatedStyles={animatedStyles} />;
  };
  /** ****************** */
  // render function
  return !isReady ? (
    <AppLoading
      startAsync={_cacheResourcesAsync}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  ) : (
    <View style={{flex: 1}}>
      <RecyclerListView
        ref={(RecyclerListView) => setRcyclerRef(RecyclerListView)}
        initialRenderIndex={currentPage.getState().currentPage}
        rowRenderer={(type, {item}, index) => <Page item={item} id={index} />}
        dataProvider={list}
        layoutProvider={layoutProvider}
        scrollEventThrottle={16}
        onMomentumScrollEnd={onScrollEnd}
        isHorizontal
        pagingEnabled
      />
      <CusttomAlert
        ref={alertRef}
        title="الخروج من التطبيق"
        subTitle="هل تريد الخروج من التطبيق ؟"
        firstButtonTitle="نعم"
        secondButtonTitle="ﻻ"
        yesButton={() => RNExitApp.exitApp()}
        cancelButton={() => alertRef.current.setIsOpen(false)}
      />
      <Margin />
      <RenderBookmarker />
      <RenderTopBar />
      <RenderButtomBar />
      <RenderToast />
      {/* <Button title="Scroll to" onPress={() => ScrollToIndex(371)} /> */}
    </View>
  );
}

export default HomeScreen;

/* <VirtualizedList
  data={QuranPages}
  initialNumToRender={5}
  renderItem={({ item }) => <Page item={item} />}
  keyExtractor={({ id }) => id}
  getItemCount={getItemCount}
  getItem={getItem}
  decelerationRate="normal"
  showsHorizontalScrollIndicator={false}
  inverted={-1}
  horizontal
  pagingEnabled
/> */
