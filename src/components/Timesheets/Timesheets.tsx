import React, { useEffect, useState } from 'react';
import times from '../../timesheets.json';
import Timesheet from "../Timesheet/Timesheet";

interface IData {
    id: string;
    assessment: number;
    breakMinutes: number;
    minutes: number;
    startTime: string;
    endTime: string;
    note: null | string;
    status: string;
    locationChecked: boolean;
    approvalPersonId: null | string;
    userId: string;
    companyId: string;
}

const Timesheets: React.FC = () => {
    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        setData(times);
    }, []);

    useEffect(() => {
        const sortedData = [...times].sort((a, b) => {
            return getMonthFromTime(a.startTime) - getMonthFromTime(b.startTime);
        });

        setData(sortedData);
    }, []);

    const getMonthFromTime = (time: string): number => {
        return new Date(time).getMonth();
    };

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>User ID</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((timesheet) => (
                        <Timesheet key={timesheet.id} timesheet={timesheet} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Timesheets;
