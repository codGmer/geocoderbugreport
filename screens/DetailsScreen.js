import React from 'react';
import {
	View,
	StyleSheet,
} from 'react-native';
import { Location, Permissions } from 'expo';
import { Constants } from 'expo';


export default class DetailsScreen extends React.Component {
	static navigationOptions = {
        header: null,
    };

	_isMounted = false;
	_isGeocoded = false;
    constructor(props){
		super(props)
        this.state = {
			hasLocationPermissions: false,
			dataSource: First={'street': 'Jan Campertstraat', 'houseNumber': '50', 'postalCode': '6416 SG'},
		};
		
		//console.log(props)
    }

	_getLocationAsync = async () => {
		if(this._isMounted){
			let { status } = await Permissions.askAsync(Permissions.LOCATION);
			if (status !== 'granted') {
				alert('Je moet toegang geven tot je locatie')
			} else {
				this.setState({ hasLocationPermissions: true });
				const adress = this.state.dataSource.street + ' ' + this.state.dataSource.houseNumber + this.state.dataSource.postalCode
				console.log('testsetsetawet')
				await Location.geocodeAsync(adress).then((value) =>{
					if(this._isMounted){
						console.log(value)
					}
				})	
			}
		}
	};

	componentDidMount() {
		this._isMounted = true;
		if(this._isMounted){
			this._getLocationAsync();
		}
	}
	
	componentWillUnmount() {
		this._isMounted = false;
		console.log('unmount')
	}

    render() {
			return(
				<View style={styles.container}>

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
