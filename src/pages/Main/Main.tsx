import { useState } from 'react'
import "./Main.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Availability from '../../components/Availability/Availability'
import Appointment from '../../components/Appointment/Appointment'
const Main = () => {
    const [appointment, setAppointment] = useState<boolean>(false);
    return (
        <div className='main'>
            <Sidebar appointment={appointment} setAppointment={setAppointment} />
            {appointment ? <Appointment /> : <Availability />}
        </div>
    )
}

export default Main
