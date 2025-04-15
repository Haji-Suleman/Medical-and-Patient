import { useState } from "react"
import "./Appointment.css"
import { assets } from "../../assets/assets"
const Appointment = () => {
    const [keyState, setKeyState] = useState<number>(0);
    const [activePatient, setActivePatient] = useState<number>(0)
    const onclickHandler = (key: number): number => {
        setKeyState(key);
        return 0;
    }
    type Appointment = {
        name: string;
        date: {
            day: number;
            month: string;
            year: number;
        };
        time: {
            first_time: string;
            second_time: string;
        };
        phone: string;
        comment: string;
    };

    const data: Appointment[] = [
        {
            name: "Emily Jones",
            date: { day: 9, month: "November", year: 2024 },
            time: { first_time: "11:00am", second_time: "11:30pm" },
            phone: "+923079852568",
            comment: "I would like to discuss recent test results"
        },
        {
            name: "Emily Jones",
            date: { day: 9, month: "November", year: 2024 },
            time: { first_time: "11:00am", second_time: "11:30pm" },
            phone: "+923079852568",
            comment: "I would like to discuss recent test results"
        },
        {
            name: "Emily Jones",
            date: { day: 9, month: "November", year: 2024 },
            time: { first_time: "11:00am", second_time: "11:30pm" },
            phone: "+923079852568",
            comment: "I would like to discuss recent test results"
        }
    ];
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
                        <div key={key} className={keyState === key ? "active" : ""} onClick={() => onclickHandler(key)}>
                            {_}
                        </div>
                    ))}
                </div>
            </div>
            <div className="appoint-footer">
                {
                    data.map(({ date, time, phone, comment, name }, key) => {
                        return (
                            <div key={key} onClick={() => setActivePatient(key)} className={activePatient === key ? "active-patient" : ""}>
                                <div className="name-photo-patient">
                                    <img src={assets.emily} alt="" className="emily" />
                                    <p><b>{name}</b></p>
                                </div>
                                <div className="date-time">
                                    <div className="date-time-date">
                                        <img src={assets.calender} alt="" className="call-calender-time-icons" />
                                        <p>{date.day} {date.month}, {date.year}</p>
                                    </div>
                                    <div className="date-time-time">
                                        <img src={assets.time} alt="" className="call-calender-time-icons" />
                                        <p>{time.first_time} - {time.second_time}</p>
                                    </div>
                                </div>
                                <div className="patient-phone">
                                    <img src={assets.call} alt="" className="call-calender-time-icons" />
                                    <p> {phone}</p>
                                </div>
                                <div className="patient-comment">
                                    {comment}
                                </div>
                                <div className="confirm-decline">
                                    <button className="decline">decline</button>
                                    <button className="confirm">confirm</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Appointment
