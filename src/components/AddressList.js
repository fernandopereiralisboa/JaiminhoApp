import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardItem, Body } from 'native-base';

class AddressList extends Component {
	render() {
		return (
			<Card>
				<CardItem header>
					<Text>Endereço:</Text>
				</CardItem>
				<CardItem>
					<Body>
						<Text>
						//Your text here
						</Text>
					</Body>
				</CardItem>
				<CardItem footer>
					<Text>GeekyAnts</Text>
				</CardItem>
			</Card>
		)
	}
}

export default AddressList;