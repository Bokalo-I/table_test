import React from 'react';

const User = ({user}:any) => {
    return (
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
        </tr>
    );
};

export default User;