import { useState } from "react"
import { assets } from "../../../assets/assets"
import "./BookAppointment.css"
const BookAppointment = () => {
  const [active, setActive] = useState<number>(0);
  const [timeActive, setTimeActive] = useState<number>(0);
  return (
    <div className="book-appointment">
      <h1 className='book-heading'>Book Appointment</h1>
      <div className="information-box">

        <div className="book-information">
          <div className="personal-details">
            <div>

              <img src={assets.emily} alt="" />
            </div>
            <div>
              <p>Dr. Raj Patel</p>
              <p>Orthopedics</p>
            </div>
          </div>
        </div>
        <div className="book-info">
          <div>
            <div className="doctor-avail">
              <div><img src={assets.doctoravailability} /></div>
              <div>Availability: Tue, Thurs, Fri</div>
            </div>
            <div className="experience">
              <div><img src={assets.experience} alt="" /></div>
              <div>9 Years of experience </div>
            </div>
            <div className="rating">
              <div><img src={assets.rating} /></div>
              <div>5 start rating</div>
            </div>
          </div>
          <div>
            <p className="comment">
              Dr. Patel has dedicated over 8 years to orthopedic care, focusing on treating musculoskeletal injuries, joint disorders, and sports injuries. Known for his patient-centered approach, he tailors treatment plans to fit individual needs, from preventative care to surgical solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="select-day">
        <h4 className="head-select-day">Select Day</h4>
        <div className="day-date-day">
          {["MON", "TUE", "FRI"].map((day, key) => {
            return (
              <div className="day-selection" key={key}>{day}</div>
            )
          })}
        </div>
        <div className="day-date-date">
          {[5, 6, 7].map((key, date) => {
            return (
              <div className={active === key ? "Day-Active" : ""} onClick={() => setActive(key)} key={key}>{date}</div>
            )
          })}
        </div>
      </div>
      <div className="select-time">
        <h4 className="head-select-time">Select Time</h4>
        <div className="select-time-text">
          {["9:00 AM", "9:00 AM", "9:00 AM", "9:00 AM", "9:00 AM", "9:00 AM", "9:00 AM", "9:00 AM", "9:00 AM", "9:00 AM", "9:00 AM"].map((time, key) => (
            <div key={key} onClick={() => setTimeActive(key)} className={timeActive === key ? "Active-time" : ""}>{time}</div>
          ))
          }
        </div>
      </div>
      <form>
        <div className="reason-for-appointment">
          <h3>Reason for Appointment</h3>
          <textarea placeholder="Please tell us why you would like to book this appointment with Dr. Raj Patel." rows={6}></textarea>
        </div>
        <div className="booking-appointment">
          <button className="book-appointment-btn">Book Appointment</button>
        </div>
      </form >
    </div>
  )
}

export default BookAppointment