import { CurrentTime } from '../CurrenTime'
import { CurrentDate } from '../DateDisplay'
import './styles.css'

export const Footer = () => {
    return (
        <div className="footer">
            <CurrentDate />
            <CurrentTime />
        </div>
    )
    }   
