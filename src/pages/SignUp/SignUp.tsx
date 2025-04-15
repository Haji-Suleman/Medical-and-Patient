import { useState } from "react";
import { assets } from "../../assets/assets"
import "./SignUp.css"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const navigate = useNavigate();
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
                <h1>{showLogin === false ? "Sign Up" : "Login"}</h1>
                <form >
                    {showLogin === false ?
                        <>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" />
                            </div>

                        </> : <> </>
                    }
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    {!showLogin ? <div>
                        <label htmlFor="category">Specialization</label>
                        <select id="category">
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="CardioLogoy">CardioLogoy</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="General Surgery">General Surgery</option>
                            <option value="Radiology">Radiology</option>
                            <option value="Psychiatry">Psychiatry</option>
                        </select>
                    </div> : <></>}

                    <div>
                        <label htmlFor="password">Password</label>
                        <div className="password">
                            <input type={!showPassword ? "password" : "text"} name="password" id="password" />
                            <img onClick={() => showPassword ? setShowPassword(false) : setShowPassword(true)} src={showPassword ? assets.showpassword : assets.hidepassword} />
                        </div>
                    </div>
                    <button onClick={() => navigate("/doctor/home")}>Continue</button>
                    {showLogin ?
                        <p>Already have an account? <span onClick={() => setShowLogin(false)}>Login</span></p> :
                        <p>Don't have account  <span onClick={() => setShowLogin(true)}>Sign Up</span></p>

                    }
                </form>
            </div>

        </div>
    )
}

export default SignUp
