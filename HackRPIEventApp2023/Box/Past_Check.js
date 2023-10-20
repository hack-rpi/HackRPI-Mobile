import { useEffect, useState } from 'react';

function Past_Check(date, StartTime, EndTime) {
    const [isTimePast, setIsTimePast] = useState(false);
    const Check_Time = () => {
        const currentDateTime = new Date();
        // Get the current date in ISO 8601 format
        const currentDate = currentDateTime.toISOString().split('T')[0];
        const currentTime = currentDateTime.toLocaleTimeString([], 
            { hour: '2-digit', minute: '2-digit'});
        if (currentDate === date && currentTime >= EndTime || currentDate > date) {
            setIsTimePast(true);
        } else {
            setIsTimePast(false);
        }
  };
    useEffect(() => {
        Check_Time();
        const interval = setInterval(() => {
            Check_Time();
        }, 10000);
        return () => clearInterval(interval);
    }, [date, StartTime, EndTime]);
    return isTimePast;
}
export default Past_Check;