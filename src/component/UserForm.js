import React, { Component } from 'react';

export default ({ showCreate, updateUser, onUserFieldModified, onCityFieldModified, onHideCreateUser, onUserUpdate }) => {
    return (
        showCreate ? 
            <form onSubmit={e => {
                e.preventDefault()
                onUserUpdate(updateUser)
            }}>
                <h3>Create a user</h3>
                <div>
                    <label htmlFor="name">name: </label>                                
                    <input 
                        type="text" 
                        name="name" 
                        value={updateUser.name}
                        onChange={ e => onUserFieldModified(updateUser, 'name', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="age">age: </label>                                
                    <input 
                        type="number" 
                        name="age" 
                        value={updateUser.age}
                        onChange={ e => onUserFieldModified(updateUser, 'age', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="city_name">city name: </label>                                
                    <input 
                        type="text" 
                        name="city_name" 
                        value={updateUser.city.name}
                        onChange={ e => onCityFieldModified(updateUser, 'name', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="city_brief">city brief: </label>                                
                    <input 
                        type="text" 
                        name="city_brief" 
                        value={updateUser.city.brief}
                        onChange={ e => onCityFieldModified(updateUser, 'brief', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="sex">sex: </label>
                    <select
                        value={updateUser.sex}
                        onChange={ e => onUserFieldModified(updateUser, 'sex', e.target.value)}
                    >
                        <option value="female">female</option>
                        <option value="male">male</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value={updateUser.id ? 'edit' : 'create'}
                    />
                    <button onClick={onHideCreateUser}>cancel</button>
                </div>
            </form>
            : null
    )
}