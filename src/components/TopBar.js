import React from 'react';
import {Dimensions, Text, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {getHezib, getSourah} from '../config/QuranContent';

// total num of page
const PagesNum = 607;

// top bar item
const topBarItem = [
  {item: 'سورة'},
  {item: 'الجهة'},
  {item: 'الصفحة'},
  {item: 'الحزب'},
];

const TopBar_ = () => {
  const {width, height} = Dimensions.get('screen');
  const currentPage = useSelector((state) => state.currentPage);
  return (
    <>
      {topBarItem.map((item, index) => (
        <Text
          style={{
            fontSize: !(width > height) ? height * 0.03 : height * 0.06,
            fontFamily: 'Arabic',
          }}
          key={index}>
          {index === 0
            ? item.item + ' ' + getSourah(currentPage)
            : index === 1
            ? item.item +
              ` ${(PagesNum - currentPage) % 2 !== 0 ? 'اليسرى' : 'اليمنى'}`
            : index === 2
            ? item.item + ` ${PagesNum - currentPage}`
            : item.item + ' ' + getHezib(currentPage)}
        </Text>
      ))}
    </>
  );
};
// // total num of page
// const PagesNum = 607;

// // top bar item
// const topBarItem = [{ item: "سورة" }, { item: "الصفحة" }, { item: "الحزب" }];

// class TopBar extends React.Component {
//   constructor(prop) {
//     super(prop);
//     this.state = {
//       currentPage: this.props.currentPage,
//     };
//   }

//   // update the current index when croll change
//   updateCurrentPage = (index) => {
//     this.setState({ currentPage: index });
//   };
//   // render funtion
//   render() {
//     const { width, height } = Dimensions.get("screen");
//     return (
//       <>
//         {topBarItem.map((item, index) => (
//           <Text
//             style={{
//               fontSize: !(width > height) ? height * 0.03 : height * 0.06,
//               fontFamily: "Arabic",
//             }}
//             key={index}
//           >
//             {index === 0
//               ? item.item + " " + getSourah(this.state.currentPage)
//               : index === 1
//               ? item.item + ` ${PagesNum - this.state.currentPage}`
//               : item.item + " " + getHezib(this.state.currentPage)}
//           </Text>
//         ))}
//       </>
//     );
//   }
// }

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  setIsShow = (boolean) => {
    this.setState({isShow: boolean});
  };
  render() {
    return this.state.isShow ? (
      <Animated.View
        style={[this.props.topBarStyle, this.props.animatedStyles]}>
        <TopBar_ />
      </Animated.View>
    ) : null;
  }
}
