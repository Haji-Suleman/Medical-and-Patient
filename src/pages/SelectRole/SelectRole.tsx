import { useState } from 'react'
import "./SelectRole.css"
import { assets } from '../../assets/assets'
const SelectRole = () => {
    const [active, setActive] = useState("");
    return (
        <div className='select-role'>
            <div className="select-role-nav">

                <img src={assets.logo} alt="" className='logo' />
            </div>
            <div className='select-role-main'>

                <div className='select-role-header'>
                    <h3>Select Your Role</h3>
                    <p>Tell us how you'd like to use the web</p>
                </div>
                <div className='select-role-options'>
                    <div className={active === 'doctor' ? "active" : ""} onClick={() => setActive("doctor")}><img src={assets.doctor} alt="" /><p>Doctor</p></div>
                    <div className={active === 'doctor' ? "" : "active"} onClick={() => setActive("patient")}><img src={assets.patient} alt="" /><p>patient</p></div>
                </div >
            </div>
            <div className="select-role-continue">
                <button>Continue</button>
            </div>
        </div >
    )
}

export default SelectRole
