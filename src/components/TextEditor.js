import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Pressable,
  Modal,
  Animated,
} from 'react-native';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import HTMLView from 'react-native-htmlview';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';

import * as Actions from '../config/redux/actions';
const PagesNum = 607;

const action = [
  'bold',
  'italic',
  'unorderedList',
  'orderedList',
  'heading1',
  'heading2',
];
const Editor = ({modalVisible, setModalVisible}) => {
  const dispatch = useDispatch(); // dispatch the store with new update
  const currentPage = useSelector((state) => state.currentPage);
  const margin = useSelector((state) => state.margilization);
  const article =
    margin !== {} && '' + (PagesNum - currentPage) in margin
      ? margin[PagesNum - currentPage]
      : '';

  const RichText = useRef(); //reference to the RichEditor component
  const [edit, setEdit] = useState(article === '' ? true : false);
  const [done, setDone] = useState(false);

  const DoneButton = ({
    visible = true,
    icon,
    iconSize,
    color,
    onPress,
    style,
  }) => {
    return (
      <Pressable
        disabled={!visible}
        onPress={onPress}
        style={[
          {
            top: 5,
            left: 5,
            width: 40,
            height: 40,
            borderRadius: 25,
            backgroundColor: !done ? 'white' : color,
          },
          style,
        ]}>
        {icon === 'done' ? (
          <>
            <MaterialIcons name={icon} size={40} color="black" />
            <Text style={{textAlign: 'center', fontFamily: 'Arabic'}}>حفظ</Text>
          </>
        ) : icon === 'backspace-reverse-outline' ? (
          <>
            <MaterialCommunityIcons
              style={{
                left: iconSize === 28 ? 9 : 12,
                top: iconSize === 28 ? 5 : 9,
              }}
              name={icon}
              size={iconSize}
              color="black"
            />
            <Text
              style={{
                top: iconSize === 28 ? 10 : 18,
                textAlign: 'center',
                fontFamily: 'Arabic',
              }}>
              عودة
            </Text>
          </>
        ) : (
          <>
            <FontAwesome5
              style={{left: 10, top: 7}}
              name={icon}
              size={30}
              color="black"
            />
            <Text style={{top: 18, textAlign: 'center', fontFamily: 'Arabic'}}>
              تعديل
            </Text>
          </>
        )}
      </Pressable>
    );
  };

  const EditorTextTitle = ({style, text}) => {
    return (
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 10}}>
        <Text style={[styles.text, style]}>{text}</Text>
      </View>
    );
  };

  const BackButton = ({style, iconSize = 30}) => {
    return (
      <DoneButton
        iconSize={iconSize}
        icon="backspace-reverse-outline"
        color="#69fa71"
        onPress={() => {
          setModalVisible(false);
          setDone(false);
        }}
        style={[
          {
            left: 10,
            backgroundColor: '#03fcd3',
            width: 50,
            height: 50,
            borderRadius: 28,
          },
          style,
        ]}
      />
    );
  };

  const EditButton = () => {
    return (
      <DoneButton
        icon="edit"
        color="#69fa71"
        onPress={() => {
          setEdit(true);
          setDone(false);
        }}
        style={{
          backgroundColor: '#03fcd3',
          width: 50,
          height: 50,
          borderRadius: 28,
        }}
      />
    );
  };
  const handelOnPress = () => {
    setEdit(false);
  };

  useEffect(() => {
    margin !== {} &&
    '' + (PagesNum - currentPage) in margin &&
    margin[PagesNum - currentPage] !== ''
      ? setEdit(false)
      : setEdit(true);
  }, [modalVisible]);

  return (
    <>
      <MaterialIcons name="margin" size={34} color="black" style={{top: 4.5}} />
      <Modal visible={modalVisible} animationType="slide">
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>

        <View
          style={[
            styles.container,
            {backgroundColor: edit ? '#FEF4D6' : null},
          ]}>
          {!edit ? (
            <>
              <View style={styles.hederTitle}>
                <EditButton />
                <BackButton />
                <View
                  style={{
                    flex: 1,
                    left: -20,
                    height: '60%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <EditorTextTitle
                    style={{fontSize: 30, fontFamily: 'Arabic'}}
                    text="الهامش"
                  />
                </View>
              </View>
              <View
                style={{
                  height: '85%',
                  bottom: '12%',
                }}>
                <ScrollView>
                  <HTMLView value={article} stylesheet={styles} />
                </ScrollView>
              </View>
            </>
          ) : (
            <>
              <View style={[styles.hederTitle, {top: 20}]}>
                <DoneButton
                  visible={done}
                  icon="done"
                  color="#03fcd3"
                  onPress={handelOnPress}
                />
                <BackButton
                  iconSize={28}
                  style={{
                    top: 5,
                    left: 5,
                    width: 40,
                    height: 40,
                    borderRadius: 25,
                    marginLeft: 5,
                  }}
                />

                <EditorTextTitle
                  style={{top: -18, fontSize: 20, fontFamily: 'Arabic'}}
                  text={
                    'هامش لتدوين المتشابهات بالنسبة لحفظة كتاب الله \n أو لتدوين معاني الآيات أو خواطر'
                  }
                />
              </View>
              <ScrollView style={{marginTop: 60}}>
                <RichEditor
                  editorStyle={{cssText: 'div {text-align: right;}'}}
                  disabled={false}
                  containerStyle={styles.editor}
                  ref={RichText}
                  style={styles.rich}
                  placeholder={'إبدا الكتابة هنا'}
                  initialContentHTML={article}
                  onChange={(text) => {
                    const content = text.split('</div><div>').join('</br>');
                    dispatch(
                      Actions.addMargin({
                        [PagesNum - currentPage]: '<div>' + content + '</div>',
                      }),
                    );
                    if (!done) setDone(true);
                  }}
                />
              </ScrollView>
              <RichToolbar
                style={[styles.richBar]}
                editor={RichText}
                disabled={false}
                iconTint="#6e6969"
                selectedIconTint="pink"
                disabledIconTint="red"
                iconSize={55}
                actions={[...action]}
                // map icons for self made actions
                iconMap={{
                  [actions.heading1]: ({tintColor}) => (
                    <MaterialCommunityIcons
                      style={{paddingHorizontal: 12}}
                      name="format-header-1"
                      size={30}
                      color={tintColor}
                    />
                  ),
                  [actions.heading2]: ({tintColor}) => (
                    <MaterialCommunityIcons
                      style={{paddingHorizontal: 12}}
                      name="format-header-2"
                      size={30}
                      color={tintColor}
                    />
                  ),
                }}
              />
            </>
          )}
        </View>
      </Modal>
    </>
  );
};

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      modalVisible: false,
    };
  }
  setIsShow = (boolean) => {
    this.setState({isShow: boolean});
  };
  setModalVisible = (value) => {
    this.setState({modalVisible: value});
  };
  render() {
    return this.state.isShow ? (
      <Animated.View
        style={[
          {
            top: 100,
            position: 'absolute',
            right: 0,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            borderRadius: 50 / 2,
            backgroundColor: 'white',
          },
          this.props.animatedStyles,
        ]}>
        <Pressable onPress={() => this.setModalVisible(true)}>
          <Editor
            modalVisible={this.state.modalVisible}
            setModalVisible={this.setModalVisible}
          />
          <Text style={{left: -3, top: -3, fontSize: 12, fontFamily: 'Arabic'}}>
            الهامش
          </Text>
        </Pressable>
      </Animated.View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  /********************************/
  /* styles for html tags */
  a: {
    fontWeight: 'bold',
    color: 'purple',
  },
  h1: {
    fontFamily: 'Arabic',
    fontSize: 40,
  },
  h2: {
    fontFamily: 'Arabic',
    fontSize: 30,
  },
  div: {
    fontFamily: 'Arabic',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 5,
    marginRight: 5,
    padding: 20,
    backgroundColor: '#FEF4D6',
    width: '98%',
    minHeight: '90%',
    borderRadius: 20,
    borderWidth: 0.5,
    fontSize: 22,
  },
  p: {
    fontSize: 30,
  },
  /*******************************/
  container: {
    flex: 1,
    margin: 5,
    marginTop: 10,
    borderRadius: 20,
  },
  result: {
    borderRadius: 20,
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '40%',
    backgroundColor: 'white',
  },
  hederTitle: {
    flexDirection: 'row',
  },
  //scrollview: {},
  editor: {
    //marginTop: 60,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    margin: 7,
  },
  rich: {
    minHeight: '100%',
  },
  richBar: {
    position: 'absolute',
    left: 40,
    marginTop: 85,
    height: 50,
    backgroundColor: '#FEF4D6',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 10,
  },
  text: {
    //fontWeight: "bold",
    right: 10,
    fontSize: 22,
    textAlign: 'right',
  },
  tib: {
    //textAlign: "center",
    color: '#515156',
    fontSize: 22,
  },
});

/*
0- rsf [functional component]
1- imr [Import React] // import React from 'react';
2- imrn [Import React-Native Element] //import { $1 } from 'react-native';
3- slc [Stateless Component Function] // 
4- rnss [React native styleSheet]
5- impt [Import PropTypes] // import PropTypes from 'prop-types';
6- log [Console Log]

import React, { useState } from "react";
import { View, Modal, Button } from "react-native";
import CusttomButton from "./src/components/CusttomButton";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Button title="click me" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <CusttomButton title="إلغاء" onPress={() => setModalVisible(false)} />
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  onSelectedItem(item);
                  setModalVisible(false);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

export default App;


Array [
  "bold",
  "italic",
  "SET_TEXT_COLOR",
  "unorderedList",
  "orderedList",
  "justifyCenter",
  "justifyLeft",
  "justifyRight",
  "heading1",
  "heading2",
]


Object {
  "alignCenter": "justifyCenter",
  "alignFull": "justifyFull",
  "alignLeft": "justifyLeft",
  "alignRight": "justifyRight",
  "content": "content",
  "heading1": "heading1",
  "heading2": "heading2",
  "heading3": "heading3",
  "heading4": "heading4",
  "heading5": "heading5",
  "heading6": "heading6",
  "init": "init",
  "insertBulletsList": "unorderedList",
  "insertHTML": "html",
  "insertImage": "image",
  "insertLine": "line",
  "insertLink": "link",
  "insertOrderedList": "orderedList",
  "insertText": "text",
  "insertVideo": "video",
  "prepareInsert": "PREPARE_INSERT",
  "removeFormat": "removeFormat",
  "restoreSelection": "RESTORE_SELECTION",
  "setBackgroundColor": "SET_BACKGROUND_COLOR",
  "setBold": "bold",
  "setContentFocusHandler": "SET_CONTENT_FOCUS_HANDLER",
  "setContentPlaceholder": "SET_CONTENT_PLACEHOLDER",
  "setCustomCSS": "SET_CUSTOM_CSS",
  "setEditorHeight": "SET_EDITOR_HEIGHT",
  "setFooterHeight": "SET_FOOTER_HEIGHT",
  "setHR": "horizontalRule",
  "setIndent": "indent",
  "setItalic": "italic",
  "setOutdent": "outdent",
  "setParagraph": "SET_PARAGRAPH",
  "setPlatform": "SET_PLATFORM",
  "setStrikethrough": "strikeThrough",
  "setSubscript": "subscript",
  "setSuperscript": "superscript",
  "setTextColor": "SET_TEXT_COLOR",
  "setTitleFocusHandler": "SET_TITLE_FOCUS_HANDLER",
  "setTitlePlaceholder": "SET_TITLE_PLACEHOLDER",
  "setUnderline": "underline",
  "updateHeight": "UPDATE_HEIGHT",


*/
