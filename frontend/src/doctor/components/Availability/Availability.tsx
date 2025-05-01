import { useContext, useState } from "react";
import { assets } from "../../../assets/assets";
import "./Availability.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { inputTime } from "../../../types/types";
import axios from "axios";
import { StoreContext } from "../../../Context/StoreContext";

const Availability = () => {
    const newData: inputTime = {};
    const initialDays: {
        id: string;
        label: string;
        unavailable: boolean;
    }[] = [
            { id: "sunday", label: "Sunday", unavailable: false },
            { id: "monday", label: "Monday", unavailable: false },
            { id: "tuesday", label: "Tuesday", unavailable: false },
            { id: "wednesday", label: "Wednesday", unavailable: false },
            { id: "thirsday", label: "Thirstday", unavailable: false },
            { id: "friday", label: "Friday", unavailable: false },
            { id: "saturday", label: "Saturday", unavailable: false },
        ];

    const { register, handleSubmit } = useForm<inputTime>();
    const [days, setDays] = useState(initialDays);

    const context = useContext(StoreContext);
    if (!context) return null;
    const { url } = context;
    const onSubmit: SubmitHandler<inputTime> = async (data) => {
        let index = 0;
        for (const element in data) {
            if (data[element].timeFrom === "" || data[element].timeTo === "" || days[index++].unavailable) {
                continue;
            }
            newData[element as keyof inputTime] = {
                timeTo: data[element].timeTo,
                timeFrom: data[element].timeFrom,
            };
        }
        await axios.post(`${url}/api/doctor/availability`, { token: localStorage.getItem("token"), data: newData })
    };




    const handleCheckboxChange = (dayId: string) => {

        const updatedDays = days.map((day) =>
            day.id === dayId ? { ...day, unavailable: !day.unavailable } : day //// Toglling
        );
        setDays(updatedDays);
    };
    return (
        <div className="availability">
            <h1 className="availability-heading">Set Your Weekly Availability</h1>

            <div className="availability-options">
                <div>Select Day</div>
                <div>Select Timing</div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="timings">
                    <div className="days">
                        {days.map((day) => (
                            <div className="day" key={day.id}>
                                <label htmlFor={day.id}>
                                    <input
                                        type="checkbox"
                                        id={day.id}
                                        checked={!day.unavailable}
                                        onChange={() => handleCheckboxChange(day.id)}
                                    />
                                    <div>{day.label}</div>
                                </label>

                                <div className="time-input-container">
                                    {day.unavailable ? (
                                        <span>Unavailable</span>
                                    ) : (
                                        <div>
                                            To <input type="time" {...register(`${day.id}.timeTo`)} />
                                            From <input type="time" {...register(`${day.id}.timeFrom`)} />
                                        </div>
                                    )}
                                </div>

                                {!day.unavailable && (
                                    <div className="addremoveinput">
                                        <img src={assets.addicon} alt="" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="avail-footer">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default Availability;
