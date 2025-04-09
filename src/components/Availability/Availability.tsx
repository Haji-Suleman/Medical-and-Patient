import { assets } from "../../assets/assets";
import "./Availability.css";

const Availability = () => {
    return (
        <div className="availability">
            <div>
                <h1 className="availability-heading">Set Your Weekly Availablity</h1>
            </div>

            <div className="availability-options">
                <div>Select Day</div>
                <div>Select Timing</div>
            </div>

            <div className="timings">
                <div className="days">
                    {[
                        { id: "sunday", label: "Sunday", unavailable: true },
                        { id: "monday", label: "Monday" },
                        { id: "tuesday", label: "Tuesday" },
                        { id: "wednesday", label: "Wednesday" },
                        { id: "thirsday", label: "Thirstday" },
                        { id: "friday", label: "Friday" },
                        { id: "saturday", label: "Saturday", unavailable: true },
                    ].map(({ id, label, unavailable }) => (
                        <div className="day" key={id}>
                            <label htmlFor={id}>
                                <input type="checkbox" id={id} />

                                <div>{label}</div>
                            </label>
                            <div className="time-input-container">
                                {unavailable ? (
                                    <span>Unavailable</span>
                                ) : (
                                    <>
                                        To <input type="time" />
                                        From <input type="time" />

                                    </>
                                )}
                            </div>
                            {unavailable ? <></> :
                                <div className="addremoveinput">
                                    <img src={assets.addicon} alt="" />
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className="avail-footer">
                <button>save</button>
            </div>
        </div>
    );
};

export default Availability;
