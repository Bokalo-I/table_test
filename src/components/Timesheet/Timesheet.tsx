import React from 'react';

const Timesheet = ({timesheet}:any) => {
    return (
        <tr>
            <td>{timesheet.startTime.split('T')[0]}</td>
            <td>{timesheet.endTime.split('T')[0]}</td>
            <td>{timesheet.userId}</td>
        </tr>
    );
};

export default Timesheet;