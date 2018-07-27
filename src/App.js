import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

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
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router/>
            </Provider>
        )
    }
}

export default App;