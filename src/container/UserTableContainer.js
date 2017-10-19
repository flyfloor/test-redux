import React, { Component } from 'react';
import DevTools from './DevTools';
import UserListTable from '../component/UserListTable';
import UserForm from '../component/UserForm';
import { 
    fetchUserList,
    showCreateUser,
    showEditUser,
    hideCreateUser,
    deleteUser,
    updateUserField,
    updateUserCitiesField,
    createOrUpdateUser,
} from '../action/user';
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
            <article>
                <section>
                    <button onClick={this.props.showCreateUser}>add</button>
                </section>
                <UserListTable 
                    {...this.props} 
                    onEditUser={user => this.props.showEditUser(user)} 
                    onDeleteUser={user => this.props.deleteUser(user)}
                />
                <UserForm 
                    {...this.props} 
                    onUserFieldModified={this.props.updateUserField}
                    onCityFieldModified={this.props.updateUserCitiesField}
                    onHideCreateUser={this.props.hideCreateUser}
                    onUserUpdate={user => this.props.createOrUpdateUser(user)}
                />
            </article>
        );
    }
}

const mapStateToProps = state => {
    const { users, loading, showCreate, updateUser } = state.userReducer
    return {
        users,
        loading,
        showCreate,
        updateUser,
    }
}

export default connect(
    mapStateToProps, 
    {
        fetchUserList,
        showCreateUser,
        showEditUser,
        hideCreateUser,
        deleteUser,
        updateUserField,
        updateUserCitiesField,
        createOrUpdateUser,
    }
)(UserTableContainer)
