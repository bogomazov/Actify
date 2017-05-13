/**
 * Created by andrey on 10/18/16.
 @flow
 */
import React, { Component } from 'react'
import { AppRegistry, Button, View, StyleSheet, Text, TouchableHighlight, Navigator, ListView, Modal } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { mainBackgroundColor } from '../res/values/styles'
import * as appActions from '../state/actions/app';
import { setCustomText } from 'react-native-global-props';

export const INVITE_FRIENDS_TAB = 2

const customTextProps = {
  style: {
    fontFamily: 'OpenSans-Regular'
  }
}
setCustomText(customTextProps);


const mapStateToProps = (state) => {
	return {app: state.app}
}

const mapDispatchToProps = (dispatch) => {
	return {
		appActions: bindActionCreators(appActions, dispatch),
	}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MainScene extends Component {
	logUserOut = () => {
		LoginManager.logOut()
		this.props.appActions.logOut()
	}

  render() {
		console.log(this.props)
		// this.props.appActions.newAccessToken('new one')


			if (!this.props.app.isRehydrated ||
        (this.props.app.isLoggedIn && this.props.app.isPermissionsGranted && !this.props.app.isLocationGiven)) {
				return <SplashScene />
			}

			if (!this.props.app.isLoggedIn) {
				return <LoginScene/>
			}

// 			if (!this.props.app.isPermissionsGranted) {
// 				return <PermissionsScene/>
// 			}

			return (<View style={styles.container}>
				<Text>Hello!</Text>
      </View>);

  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor
  },
});
