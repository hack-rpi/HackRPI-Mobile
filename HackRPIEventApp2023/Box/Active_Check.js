import { useEffect, useState } from 'react';

function Active_Check(date, StartTime, EndTime) {
    const [isInTimeRange, setIsInTimeRange] = useState(false);

    const compareTimeRange = () => {
        const currentDateTime = new Date();
        // Get the current date in ISO 8601 format
        const currentDate = currentDateTime.toISOString().split('T')[0];
        const currentTime = currentDateTime.toLocaleTimeString([], 
            { hour: '2-digit', minute: '2-digit'});
        if (currentDate === date && currentTime >= StartTime && currentTime <= EndTime) {
        setIsInTimeRange(true);
        } else {
        setIsInTimeRange(false);
        }
  };
    useEffect(() => {
        compareTimeRange();
        const interval = setInterval(() => {
            compareTimeRange();
        }, 10000);
        return () => clearInterval(interval);
    }, [date, StartTime, EndTime]);
    return isInTimeRange;
}

export default Active_Check;