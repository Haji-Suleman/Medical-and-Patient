import { useContext, useState } from "react";
import { assets } from "../../../assets/assets"
import "./SignUp.css"
import { useForm, SubmitHandler } from "react-hook-form";
import { doctorInputs } from "../../../types/types";
import axios from "axios";
import { StoreContext } from "../../../Context/StoreContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const { register, handleSubmit } = useForm<doctorInputs>();
    const navigate = useNavigate();
    const context = useContext(StoreContext)
    if (!context) return null;
    const { url, setToken } = context
    const onSubmit: SubmitHandler<doctorInputs> = async (data) => {
        let newUrl: string = url;
        if (showLogin) {
            newUrl += "/api/doctor/login";
        }
        else {
            newUrl += "/api/doctor/register"
        }
        const role = window.location.href.split("/")[3]
        const response = await axios.post(newUrl, { ...data, role });
        if (response.data.message) {
            toast.error(response.data.message);
        }
        else {

            setToken(response.data.token)
            navigate('/patient/home')
        }
    };

    return (
        <div className="patient-login">
            <div className="left-sign-up">
                <div>
                    <img src={assets.whitelogo} alt="" className="logo" />
                </div>
                <div className="ellipse">
                </div>
                <div>
                    <div className="ellipse">
                    </div>
                    <img src={assets.paydoctor} alt="" className="paydoctor" />
                </div>
            </div>
            <div className="right-sign-up">
                <h1>{showLogin ? "Login" : "Sign Up"}</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {showLogin ?
                        <></> :
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" {...register("name", { required: true, minLength: 3 })} />
                        </div>
                    }
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" {...register("email", { required: true })} />
                    </div>
                    {showLogin ? <></> : <div>
                        <label htmlFor="category">Specialization</label>
                        <select id="category" {...register("specialization", { required: true })}>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="CardioLogoy">CardioLogoy</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="General Surgery">General Surgery</option>
                            <option value="Radiology">Radiology</option>
                            <option value="Psychiatry">Psychiatry</option>
                        </select>
                    </div>}

                    <div>
                        <label htmlFor="password">Password</label>
                        <div className="password">
                            <input type={!showPassword ? "password" : "text"} {...register("password", { required: true })} />
                            <img onClick={() => showPassword ? setShowPassword(false) : setShowPassword(true)} src={showPassword ? assets.showpassword : assets.hidepassword} />
                        </div>
                    </div>
                    <button type="submit">Continue</button>
                    {showLogin ?
                        <p>Don't have account  <span onClick={() => setShowLogin(false)}>Sign Up</span></p>
                        :
                        <p>Already have an account? <span onClick={() => setShowLogin(true)}>Login</span></p>

                    }
                </form>
            </div>

        </div>
    )
}

export default SignUp
