import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';
import DevTools from '../container/DevTools';

const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
)

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    console.log('ss')
    module.hot.accept('../reducer', () => {
        const nextRootReducer = require('../reducer').default
        store.replaceReducer(nextRootReducer)
    })
}

const store = createStore(
    rootReducer, 
    enhancer,
)

export default store