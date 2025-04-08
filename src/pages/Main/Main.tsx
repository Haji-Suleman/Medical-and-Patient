import { useState } from 'react'
import "./Main.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Availability from '../../components/Availability/Availability'
import Appointment from '../../components/Appointment/Appointment'
import Navbar from '../../components/Navbar/Navbar'
const Main = () => {
    const [appointment, setAppointment] = useState<boolean>(false);
    return (
        <div className='main'>
            <Sidebar appointment={appointment} setAppointment={setAppointment} />
            <div className='nav-app-avail'>

                <Navbar />
                {appointment ? <Appointment /> : <Availability />}
            </div>
        </div>
    )
}

export default Main
