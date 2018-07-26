import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBkxa3PCUxy1KfYyjYmc9rQpNDi_ZRV5TA",
            authDomain: "manager-b468e.firebaseapp.com",
            databaseURL: "https://manager-b468e.firebaseio.com",
            projectId: "manager-b468e",
            storageBucket: "",
            messagingSenderId: "192112065075"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        )
    }
}

export default App;