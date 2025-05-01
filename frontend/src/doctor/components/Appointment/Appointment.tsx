import { useEffect, useState } from "react"
import "./Appointment.css"
import { assets } from "../../../assets/assets"
import axios from "axios";
const Appointment = () => {
    const [keyState, setKeyState] = useState<number>(0);
    const [activePatient, setActivePatient] = useState<number>(-1);
    const [status,changeStatus] = useState<string>("pending");
    const url = "http://localhost:4000";
    type Appointment = {
        name: string;
        date: string;
        time: string;
        number: string;
        comment: string;
        imageLink: string;
        status?: string;
    };

    const [data, setData] = useState<Appointment[]>();

    useEffect(() => {
        const LoadData = async () => {

            const showRequests = await axios.post(`${url}/api/doctor/showrequest`, { token: localStorage.getItem('token') });
            console.log(showRequests)
            const realData: {
                name: string;
                date: string;
                time: string;
                number: string;
                comment: string;
                imageLink: string;
                doctorId?: string
                status: string;
                userId?: string;
            }[] = showRequests.data.data
            setData(realData)
        }
        LoadData()
    }, [])
    useEffect(()=>{
        console.log("The status is ",status)
    },[status])
    if (!data) return null;
    const onclickHandler = (key: number): number => {
        setKeyState(key);
        return 0;
    }
    const today = new Date().getDate();
    const day = new Date().toLocaleDateString('en-US', {weekday:"short"}).toUpperCase();
    let count = 0;
    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    for (let i = 0; i < 7; i++) {
        if(days[i]===day){
            count = i
        }
    }
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
                    {days.map((_, key,daysEf) => {
                        return (
                            <div className="day-name" key={key}>
                                {daysEf[count++%7]}
                            </div>
                        )
                    })
                    }
                </div>
                <div className="date">
                    {[today, today + 1, today + 2, today + 3, today + 4, today + 5, today + 6].map((_, key) => (
                        <div key={key} className={keyState === key ? "active" : ""} onClick={() => onclickHandler(key)}>
                            {_}
                        </div>
                    ))}
                </div>
            </div>
            <div className="appoint-footer">
                {
                    data.map(({ date, time, number, comment, name }, key) => {
                        const newDate = new Date(date);
                        const day = newDate.getDate();
                        const month = newDate.toLocaleString('default', { month: 'short' });
                        const year = newDate.getFullYear();
                        const [first_time, second_time] = [parseInt(time.split(":")[0]), parseInt(time.split(":")[1])];
                        let second_first_time = first_time;
                        let second_second_time = second_time + 30;
                        if (second_second_time >= 60) {
                            second_second_time -= 60;
                            second_first_time += 1;
                        }

                        function formatTime(hour: number, minute: number): string {
                            const ampm = hour >= 12 ? "pm" : "am";
                            hour = hour % 12;
                            if (hour === 0) hour = 12;
                            const minuteStr = minute < 10 ? `0${minute}` : `${minute}`;
                            return `${hour}:${minuteStr}${ampm}`;
                        }

                        const firstTimeString = formatTime(first_time, second_time);
                        const secondTimeString = formatTime(second_first_time, second_second_time);
                        return (
                            <div key={key} onClick={() => setActivePatient(key)} className={activePatient === key ? "active-patient" : ""}>
                                <div className="name-photo-patient">
                                    <img src={assets.emily} alt="" className="emily" />
                                    <p><b>{name}</b></p>
                                </div>
                                <div className="date-time">
                                    <div className="date-time-date">
                                        <img src={assets.calender} alt="" className="call-calender-time-icons" />
                                        <p> {day} {month}, {year} </p>
                                    </div>
                                    <div className="date-time-time">
                                        <img src={assets.time} alt="" className="call-calender-time-icons" />
                                        <p>{firstTimeString} - {secondTimeString}</p>
                                    </div>
                                </div>
                                <div className="patient-phone">
                                    <img src={assets.call} alt="" className="call-calender-time-icons" />
                                    <p> {number}</p>
                                </div>
                                <div className="patient-comment">
                                    {comment}
                                </div>
                                <div className="confirm-decline">
                                    <button className="decline" onClick={()=>changeStatus("declined")}>decline</button>
                                    <button className="confirm" onClick={()=>changeStatus("accepted")}>confirm</button>
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
