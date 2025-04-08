import { assets } from "../../assets/assets"
import "./Navbar.css"
const Navbar = () => {
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
                        <p><b>Dr.James Shawn</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
