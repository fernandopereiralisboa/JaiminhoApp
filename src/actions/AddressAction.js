import { NativeRouter, Route, Link } from 'react-router-native';

export class AddressAction = ({ props, value }) => {
    return() => {
        console.log(props);
    };
};