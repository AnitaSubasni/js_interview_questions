import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    state = {
        users: [
            {
                name: 'Baljeet',
                age: 25
            },
            {
                name: 'Abhijath',
                age: 29
            },
            {
                name: 'Anita',
                age: 26
            },
            {
                name: 'Mahipat',
                age: 31
            },
            {
                name: 'Sethulakshmy',
                age: 28
            },
            {
                name: 'Vinod',
                age: 26
            }
        ]
    };

    makeMeYounger = () => {
        let tempUsers = [];
        this.state.users.map((user) => {
            var newUser = { ...user };
            newUser.age -= 2;
            tempUsers.push(newUser);
        });
        this.setState({
            users: tempUsers
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.makeMeYounger}>Make me younger</button>
                <h3>{this.props.title}</h3>
                {
                    this.state.users.map((user) => {
                        return <User age={user.age} name={user.name}></User>
                    })
                }
            </div>
        )
    }
}

export default Users;