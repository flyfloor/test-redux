import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './container/RootContainer';

if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(<RootContainer/>, document.getElementById('root'))