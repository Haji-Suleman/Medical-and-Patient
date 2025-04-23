import { useContext } from "react"
import { assets } from "../../../assets/assets"
import "./Navbar.css"
import { StoreContext } from "../../../Context/StoreContext"
const Navbar = () => {
    const context = useContext(StoreContext);
    if (!context) return null;
    const {userData} = context;

    return (
        <div className='navbar'>
            <div className="nav-left">
                <img src={assets.bell} alt="" className="bell" />
                <div className="user-data">
                    <div className="user-img">
                        <img src={assets.userimg} alt="" className="user-img" />
                    </div>
                    <div className="data">
                        <p>Welcome</p>
                        <p><b>Dr. {userData.name.charAt(0).toUpperCase() + userData.name.slice(1)}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
