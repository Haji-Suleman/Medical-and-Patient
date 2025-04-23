import { useContext, useState } from "react";
import { assets } from "../../../assets/assets"
import "./SignUp.css"
import { inputs } from "../../../types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { StoreContext } from "../../../Context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<inputs>();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const context = useContext(StoreContext);
    const navigate = useNavigate();
    if (!context) return null;
    const { url,setToken} = context;
    const onSubmit: SubmitHandler<inputs> = async (data) => {
        let newUrl:string = url;
        if(showLogin===true){
            newUrl+="/api/patient/login";
        }
        else{
            newUrl+="/api/patient/register";
        }
        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token)
            navigate("/patient/home")
        }
        else{
            toast.error(response.data.message);
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
                        <></> : <>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text   " {...register("name", { required: true, minLength: 2 })} />
                                <p className="error-msg">{errors.name?.message || (errors.name && "Please enter a fair Name")}</p>
                            </div>
                        </>
                    }
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" {...register("email", { required: true })} />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <div className="password">
                            <input type={!showPassword ? "password" : "text"}  {...register("password", { required: true })} />
                            <img onClick={() => showPassword ? setShowPassword(false) : setShowPassword(true)} src={showPassword ? assets.showpassword : assets.hidepassword} />
                        </div>
                    </div>
                    <button type="submit">Continue</button>
                    {showLogin ?
                        <p>Don't have account  <span onClick={() => setShowLogin(false)}>Sign Up</span></p> :
                        <p>Already have an account? <span onClick={() => setShowLogin(true)}>Login</span></p>
                    }
                </form>
            </div>

        </div>
    )
}

export default SignUp
