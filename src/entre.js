import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import userReducer from './reducer/user';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import UserTableContainer from './container/UserTableContainer';
import DevTools from './container/DevTools';

const enhancer = compose(
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
)

const store = createStore(userReducer, enhancer, applyMiddleware(thunk))

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <UserTableContainer></UserTableContainer>
            </Provider>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))