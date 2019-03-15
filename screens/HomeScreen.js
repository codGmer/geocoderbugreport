import React from 'react';
import {
    View,
	StyleSheet,
	Linking,
	Button
} from 'react-native';
import { Constants, WebBrowser } from 'expo';

export default class DetailsScreen extends React.Component {
	static navigationOptions = {
        header: null,
    };

	_isMounted = false;
    constructor(props){
			super(props)
					this.state = {
				hasLocationPermissions: false,
				
			};
    }

	

	componentDidMount() {
		this._isMounted = true;
		if(this._isMounted){
			Linking.addEventListener('url', this._handleRedirect);
		} 
	}
	
	componentWillUnmount() {
		this._isMounted = false;
		Linking.removeEventListener("url", this._handleRedirect);
	}
	
	_handleRedirect = event => {
		//console.log(event)
		//this._getLocationAsync();
		this._openDetails();
	};

	_openDetails = () => {
		this.props.navigation.navigate("Details", { 
			
		});
	};

	_openSharedUrl(){
		WebBrowser.openBrowserAsync(Expo.Linking.makeUrl());
	}

  render() {
			return(
				<View style={styles.container}>					
					<Button title='open shared link' onPress={this._openSharedUrl}></Button>
				</View>
			)
	}
}

	

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: Constants.statusBarHeight,
		justifyContent: 'center'
	},

	header: {
		alignItems: 'center',
		backgroundColor: 'black',
		width: '100%',
		height: 40,
		flexDirection: 'row',
	},

	headerLogo: {
		resizeMode: 'center',
	}
});
