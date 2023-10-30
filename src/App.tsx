import React, { useState } from 'react';
import './App.css';
import Users from "./components/Users/Users";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Timesheets from "./components/Timesheets/Timesheets";
import usersData from './users.json';
import timesheetsData from './timesheets.json';
import { DataContext, UserType, TimesheetType } from './context/DataContext'; 

function App() {
    const [users, setUsers] = useState<UserType[]>(usersData);
    const [timesheets, setTimesheets] = useState<TimesheetType[]>(timesheetsData);
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Users />,
        },
        {
            path: "/time",
            element: <Timesheets />,
        },
    ]);

    return (
        <div className="App">
            <DataContext.Provider value={{ users, timesheets, setUsers, setTimesheets }}>
                <RouterProvider router={router} />
            </DataContext.Provider>
        </div>
    );
}

export default App;
