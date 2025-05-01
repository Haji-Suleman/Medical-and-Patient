import { useState, useEffect } from "react"
import "./Appointment.css"
import { assets } from "../../../assets/assets"
import axios from "axios"

const Appointment = () => {
  const [activePatient, setActivePatient] = useState<number>(-1)
  const url = "http://localhost:4000"

  type Appointment = {
    name: string;
    date: string;
    time: string;
    number: string;
    comment: string;
    imageLink: string;
    status?: string;
    specialization?: string;
  }

  const [data, setData] = useState<Appointment[]>()

  useEffect(() => {
    const loadData = async () => {
      const showRequests = await axios.post(`${url}/api/doctor/showrequest`, {
        token: localStorage.getItem('token')
      })
      const realData = showRequests.data.data
      setData(realData)
      console.log(realData)
    }
    loadData()
  }, [])

  function formatTime(hour: number, minute: number): string {
    const ampm = hour >= 12 ? "pm" : "am"
    hour = hour % 12
    if (hour === 0) hour = 12
    const minuteStr = minute < 10 ? `0${minute}` : `${minute}`
    return `${hour}:${minuteStr}${ampm}`
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

      <div className="appoint-footer appoint-patient-footer">
        {
          data?.map(({ date, time, number, comment, name, status,specialization }, key) => {
            const newDate = new Date(date)
            const day = newDate.getDate()
            const month = newDate.toLocaleString('default', { month: 'short' })
            const year = newDate.getFullYear()

            const [firstHour, firstMinute] = time.split(":").map(Number)
            let endHour = firstHour
            let endMinute = firstMinute + 30
            if (endMinute >= 60) {
              endMinute -= 60
              endHour += 1
            }

            const firstTimeString = formatTime(firstHour, firstMinute)
            const secondTimeString = formatTime(endHour, endMinute)

            return (
              <div
                key={key}
                onClick={() => setActivePatient(key)}
                className={activePatient === key ? "active-patient" : ""}
              >
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
                    <p>{day} {month}, {year}</p>
                  </div>
                  <div className="date-time-time">
                    <img src={assets.time} alt="" className="call-calender-time-icons" />
                    <p>{firstTimeString} - {secondTimeString}</p>
                  </div>
                </div>

                <div className="patient-phone">
                  <img src={assets.call} alt="" className="call-calender-time-icons" />
                  <p>{number}</p>
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
