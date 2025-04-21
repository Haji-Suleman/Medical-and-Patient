import { useState } from "react"
import "./Appointment.css"
import { assets } from "../../../assets/assets"
const Appointment = () => {
  const [activePatient, setActivePatient] = useState<number>(-1)
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
    specialization: string;
    status: string;
  };

  const data: Appointment[] = [
    {
      name: "Emily Jones",
      date: { day: 9, month: "November", year: 2024 },
      time: { first_time: "11:00am", second_time: "11:30pm" },
      phone: "+923079852568",
      comment: "I would like to discuss recent test results",
      specialization: "Orthodox",
      status: "Pending"
    },
    {
      name: "Emily Jones",
      date: { day: 9, month: "November", year: 2024 },
      time: { first_time: "11:00am", second_time: "11:30pm" },
      phone: "+923079852568",
      comment: "I would like to discuss recent test results",
      specialization: "Mdcat",
      status: "Declined"
    },
    {
      name: "Emily Jones",
      date: { day: 9, month: "November", year: 2024 },
      time: { first_time: "11:00am", second_time: "11:30pm" },
      phone: "+923079852568",
      comment: "I would like to discuss recent test results",
      specialization: "cardiology",
      status: "Accepted"
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

      <div className="appoint-footer appoint-patient-footer">
        {
          data.map(({ date, time, phone, comment, name, specialization, status }, key) => {
            return (
              <div key={key} onClick={() => setActivePatient(key)} className={activePatient === key ? "active-patient" : ""}>
                <div className="name-photo-status-patient">
                  <div>

                    <img src={assets.emily} alt="" className="emily" />
                    <div>
                      <p><b>{name}</b></p>
                      <p>{specialization}</p>
                    </div>
                  </div>
                  <div className="status-bar">
                    <button>{status}</button>
                  </div>
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
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Appointment
