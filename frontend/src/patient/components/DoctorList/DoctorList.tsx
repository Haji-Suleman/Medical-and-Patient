import "./DoctorList.css"
import { assets } from '../../../assets/assets'
import { useContext } from "react";
import { StoreContext } from "../../../Context/StoreContext";

const DoctorList = () => {
  const context = useContext(StoreContext)
  if (!context) return null
  const { data } = context
  return (
    <div className='doctor-list'>
      <div className='heading'>
        <h1 >Doctor Listing</h1>
      </div>
      <div className="second-heading">
        <div>
          <input type="text" placeholder='Search...' className='search' />
          <img src={assets.search} alt="" />
        </div>
        <select>
          <option value="specialization">specialization</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="CardioLogoy">CardioLogoy</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Dermatology">Dermatology</option>
          <option value="General Surgery">General Surgery</option>
          <option value="Radiology">Radiology</option>
          <option value="Psychiatry">Psychiatry</option>

        </select>
      </div>
      <div className="main">
        {data.map(({ name, availability, experience, speciality, rating }, key) => {
          return (
            <div key={key}>
              <div className="main-heading">
                <img src={assets.emily} alt="" />
                <div>
                  <p>Dr. {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                  <p>{speciality}</p> 
                </div>
              </div>
              <div className="main-and-doctor-details">

                <div className="main-main">
                  <div className="patient-availability">
                    <div>
                      <img src={assets.doctoravailability} alt="" />
                    </div>
                    <div>
                      Availability: {availability.map((avail, index) => (
                        <span key={avail}>
                          {
                            (index === availability.length - 1) ? <span key={index}>{avail}</span> : <span key={index}>{avail}, </span>
                          }
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="experience">
                    <div><img src={assets.experience} alt="" /></div>
                    <div>{experience} Years of experience </div>
                  </div>
                  <div className="rating">
                    <div><img src={assets.rating} alt="" /></div>
                    <div>{rating} start rating</div>
                  </div>
                </div>
                <div className="doctor-details" >
                  <img src={assets.doctordetails} alt="" className='doctor-details' />
                </div>
              </div>
            </div>
          )
        })

        }
      </div>
    </div>
  )
}

export default DoctorList