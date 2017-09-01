import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  Container,
  Content,
  Header,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Input,
  Item,
  Label,
  Card,
  CardItem
} from 'native-base';
import { LinearGradient } from 'expo';
import AddressList from './src/components/AddressList';

export default class App extends React.Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header style={styles.headerStyle}>
          <Left>
            <Button transparent>
              <Icon name='menu' style={styles.iconStyle} />
            </Button>
          </Left>
          <Body>
            <Text>Jaiminho</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <Item floatingLabel>
            <Label>CEP</Label>
            <Input autoCapitalize='words' />
          </Item>
          <Button info style={styles.buttonStyle}>
            <Text>Search</Text>
            <Icon name='search' />
          </Button>
          <AddressList />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#F2F5A9'
  },
  headerStyle: {
    backgroundColor: 'yellow'
  },
  iconStyle: {
    color: 'blue'
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  }
});
