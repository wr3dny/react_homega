import './styles.css';

export const CurrentDate = () => {
    const currentDate = new Date();

    let day = currentDate.getDate().toString().padStart(2, '0'); // Add leading zero if needed
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
    const year = currentDate.getFullYear();

    return <div className='date-display'>{`${day}/${month}/${year}`}</div>;
}