import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistState } from 'redux-devtools';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducer/user';
import counterReducer from './reducer/counter';
import UserTableContainer from './container/UserTableContainer';
import Counter from './container/Counter';
import DevTools from './container/DevTools';

const store = createStore(
    userReducer, 
    applyMiddleware(thunk),
)
const counterStore = createStore(
    counterReducer, 
    applyMiddleware(thunk),
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer/user', () => {
    const nextRootReducer = require('./reducer/user').default
    store.replaceReducer(nextRootReducer)
  })
}

export class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <div>
                        <UserTableContainer/>
                        <DevTools/>
                    </div>
                </Provider>
                <br/>
                <Provider store={counterStore}>
                    <Counter/>
                </Provider>
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))