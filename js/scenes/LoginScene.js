import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { View, Image, Button, StyleSheet, Text, TouchableHighlight, Navigator, ListView, Modal } from 'react-native'
import * as appActions from '../state/actions/app';
// import {SOCIAL_MEDIA_FB} from '../state/actions/app';
import { themeColor } from '../res/values/styles'

const mapStateToProps = (state) => {
	return {state}
}

const mapDispatchToProps = (dispatch) => {
	return {
		appActions: bindActionCreators(appActions, dispatch),
	}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  swiper: {
    // flex: 1,
    color: 'red',
    backgroundColor: 'red',
  },


  logoTextWrapper: {
		position: 'absolute',
		left: 0,
    right: 0,
		top: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
  },

	logoText: {
    // flex: 1,
		marginTop: 40,
		fontSize: 44,
    color: themeColor,
  },

  introWrapper: {

  },

  loginButtonWrapper: {
    height: 200
  },
});
