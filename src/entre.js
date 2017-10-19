import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import userReducer from './reducer/user';
import counterReducer from './reducer/counter';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import UserTableContainer from './container/UserTableContainer';
import Counter from './container/Counter';
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
const counterStore = createStore(counterReducer, enhancer, applyMiddleware(thunk))

if (module.hot) {
    console.log('ss')
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
                    <UserTableContainer/>
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