import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import { useEffect } from 'react'
const Sidebar = (props) => {
    useEffect(() => {
        if ("appointment" === window.location.href.split("#")[1]) {
            props.setAppointment(true);
        }
    }, [])

    return (
        <div className='sidebar'>
            <div className="side-logo">
                <img src={assets.whitelogo} alt="" className='logo' />
            </div>
            <div className="links">
                <div className={props.appointment ? "" : "active"}><Link to="/home/#availability" onClick={() => props.setAppointment(false)}>img Set Availability</Link></div>
                <div className={props.appointment ? "active" : ""}><Link to="/home/#appointment" onClick={() => props.setAppointment(true)}>img appointment</Link></div>
            </div>
        </div>
    )
}

export default Sidebar
