import React, { Component } from 'react';
import UserListTable from '../component/UserListTable';
import DevTools from './DevTools';
import { fetchUserList } from '../action/user';
import { connect } from 'react-redux';

export class UserTableContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUserList({})
    }
    render() {
        return (
            <UserListTable {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    const { userReducer } = state
    return {
        users: userReducer.users,
        loading: userReducer.loading
    }
}

export default connect(
    mapStateToProps, 
    {
        fetchUserList
    }
)(UserTableContainer)
