import { useEffect, useState } from 'react';
import './styles.css'

export const CurrentTime = () => {
    const currentTime = new Date();

    let hours = currentTime.getHours().toString().padStart(2, '0'); // Add leading zero if needed
    let minutes = currentTime.getMinutes().toString().padStart(2, '0'); // Add leading zero if needed
    let seconds = currentTime.getSeconds().toString().padStart(2, '0'); // Add leading zero if needed
   
   const [time, setTime] = useState(currentTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    
   
    return (
    <>
    <div className='time-display-hours'>{`${hours}`}</div>
    
    <div className='time-display-minutes'>{`${minutes}:${seconds}`}</div>
    </>);

}



