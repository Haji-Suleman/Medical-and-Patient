import { useContext, useState } from 'react'
import "./Main.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Availability from '../../components/DoctorList/DoctorList'
import Appointment from '../../components/Appointment/Appointment'
import Navbar from '../../components/Navbar/Navbar'
import { StoreContext } from '../../../Context/StoreContext'
import BookAppointment from '../../components/BookAppointment/BookAppointment'
const Main = () => {
    const [appointment, setAppointment] = useState<boolean>(false);
    const context = useContext(StoreContext);
    const { page } = context || {};
    return (
        <div className='main'>
            <Sidebar appointment={appointment} setAppointment={setAppointment} />
            <div className='nav-app-avail'>

                <Navbar />
                {page || window.location.search ? <BookAppointment /> : appointment ? <Appointment /> : <Availability />}
            </div>
        </div>
    )
}

export default Main
