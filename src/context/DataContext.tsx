import React from 'react';

export type UserType = {
    id: string;
    firstName: string;
    lastName: string;
};

export type TimesheetType = {
    id: string;
    assessment: number;
    breakMinutes: number;
    minutes: number;
    startTime: string;
    endTime: string;
    note: string | null;
    status: string;
    locationChecked: boolean;
    approvalPersonId: string | null;
    userId: string;
    companyId: string;
};

export type DataContextType = {
    users: UserType[];
    timesheets: TimesheetType[];
    setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
    setTimesheets: React.Dispatch<React.SetStateAction<TimesheetType[]>>;
};

export const DataContext = React.createContext<DataContextType>({
    users: [],
    timesheets: [],
    setUsers: () => {},
    setTimesheets: () => {}
});
