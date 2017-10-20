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

const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
)

const store = createStore(
    userReducer, 
    enhancer,
)
const counterStore = createStore(
    counterReducer, 
    enhancer,
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer/user', () => {
    const nextRootReducer = require('./reducer/user').default
    store.replaceReducer(nextRootReducer)
  })
  module.hot.accept('./reducer/counter', () => {
    const nextRootReducer = require('./reducer/counter').default
    counterStore.replaceReducer(nextRootReducer)
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
                    <div>
                        <Counter/>
                    </div>
                </Provider>
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))