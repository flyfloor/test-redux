import React from 'react';

export default ({ users, loading, onEditUser, onDeleteUser }) => (
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>sex</th>
                <th>city</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            { loading ? 
                <tr>
                    <td colSpan={5}>
                        loading....
                    </td>
                </tr>
                : users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.sex}</td>
                        <td>{user.city.brief}-{user.city.name}</td>
                        <td>
                            <button onClick={() => onEditUser(user)}>edit</button>
                            <button onClick={() => onDeleteUser(user)}>delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
)
