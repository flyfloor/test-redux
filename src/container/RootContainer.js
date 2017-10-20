import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configStore from '../store/configStore';
import UserTableContainer from './UserTableContainer';
import Counter from './Counter';
import DevTools from './DevTools';

export default () => (
    <Provider store={configStore}>
        <div>
            <UserTableContainer/>
            <br/>
            <Counter/>
            <DevTools/>
        </div>
    </Provider>
)