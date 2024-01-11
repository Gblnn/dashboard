import { BellOutlined, HomeOutlined, IdcardOutlined, LogoutOutlined, ProfileOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
    const location = useLocation()
    return(
        <>
        <div className="nav-container">
            <div className="nav">
                <div className="desktop-only column">
                    <Link to="/layout/home" className="nav-item">
                        <img src="/butterfly.png" style={{width:"1.5rem"}}/>
                    </Link>
                    
                    <button className="nav-item">
                        <SearchOutlined/>
                    </button>
                    <div style={{height:"1rem"}}></div>
                </div>
                
            
                

                <Link to="home" className={location.pathname=="/layout/home"?"active":"nav-item"}>
                    <HomeOutlined/>
                </Link>
                <Link to="account" className={location.pathname=="/layout/account"?"active":"nav-item"}>
                    <IdcardOutlined/>
                </Link>
                <Link to="listings" className={location.pathname=="/layout/listings"?"active":"nav-item"}>
                    <ProfileOutlined/>
                </Link>
                <Link to="profile" className={location.pathname=="/layout/profile"?"active":"nav-item"}>
                    <UserOutlined/>
                </Link>
                <button className="mobile-only nav-item">
                    <SearchOutlined/>
                </button>

            </div>
            

            
            <div className="desktop-only" style={{flexFlow:"column", gap:"1rem"}}>
            <button className="nav-item">
                <Badge color="#85afff" dot={true}>
                <BellOutlined/>
                </Badge>
                
            </button>
            <button className="nav-item">
                <LogoutOutlined/>
            </button>
            </div>
            
            
        </div>
        </>
    )
}