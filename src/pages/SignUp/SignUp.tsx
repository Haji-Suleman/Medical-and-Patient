import { useState } from "react";
import { assets } from "../../assets/assets"
import "./SignUp.css"

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
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
                <h1>Sign Up</h1>
                <form >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="category">Specialization</label>
                        <select id="category">
                            <option value=""></option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <div className="password">
                            <input type="password" name="password" id="password" />
                            <img onClick={() => showPassword ? setShowPassword(false) : setShowPassword(true)} src={showPassword ? assets.showpassword : assets.hidepassword} />
                        </div>
                    </div>
                    <button>Continue</button>
                </form>
            </div>

        </div>
    )
}

export default SignUp
