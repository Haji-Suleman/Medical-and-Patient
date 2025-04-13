import "./Appointment.css"
const Appointment = () => {

    return (
        <div className="appointment">
            <div className="second-nav">
                <div>
                    <h1>View Appointments</h1>
                </div>
                <div>
                    <select>
                        <option>Pending</option>
                    </select>
                </div>
            </div>
            <div className="mid-appointment">
                <div className="appoint-day">
                    {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((_, key) => {
                        return (
                            <div className="day-name" key={key}>
                                {_}
                            </div>

                        )
                    })
                    }
                </div>
                <div className="date">
                    {[5, 6, 7, 8, 9, 10, 11].map((_, key) => (
                        <div key={key} className="date-name">
                            {_}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Appointment
