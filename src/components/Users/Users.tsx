import React from 'react';
import users from "../../users.json";
import User from "../User/User";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate()

    return (
        <div>
            <table className="table table-bordered"> 
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody> 
                    {users.map(user => <User key={user.id} user={user} />)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={() => navigate('/time')}>Check timesheet table</button>
        </div>
    );
};

export default Users;