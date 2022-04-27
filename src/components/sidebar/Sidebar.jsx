import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {DarkModeContext} from "../../context/darkModeContext";

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar"> 
          <div className="top">
              <Link to="/" style={{ textDecoration: "none"}}>
              <span className="logo">ADMIN</span>
              </Link>
          </div>

          <hr />

          <div className="center">
              <ul>
                  <p className="title">MAIN</p>
                  <Link to ="/" style={{ textDecoration: "none"}}>
                  <li>
                      <DashboardIcon className="icon" />
                      <span>Dashboard</span>
                  </li>
                  </Link>
                  <p className="title">LISTS</p>
                  <Link to ="/users" style={{ textDecoration: "none"}}>
                  <li>
                      <PersonOutlineOutlinedIcon className="icon" />
                      <span>Users</span>
                  </li>
                  </Link>
                  <Link to ="/products" style={{ textDecoration: "none"}}>
                  <li>
                      <AddBusinessOutlinedIcon  className="icon" />
                      <span>Products</span>
                  </li>
                  </Link>
                  <li>
                      <CreditCardOutlinedIcon className="icon" />
                      <span>Orders</span>
                  </li>
                  <li>
                      <LocalShippingOutlinedIcon className="icon" />
                      <span>Delivery</span>
                  </li>

                  <p className="title">USEFUL</p>
                  <li>
                      <AssessmentIcon className="icon" />
                      <span>Stats</span>
                  </li>
                  <li>
                      <NotificationsNoneIcon  className="icon" />
                      <span>Notifications</span>
                  </li>
                  <p className="title">SERVICE</p>
                  <li>
                  
                      <HealthAndSafetyIcon className="icon" />
                      <span>System Health</span>
                  </li>
                  <li>
                      <PsychologyIcon  className="icon" />
                      <span>Logs</span>
                  </li>
                  <li>
                      <SettingsApplicationsIcon  className="icon" />
                      <span>Settings</span>
                  </li>

                  <p className="title">USER</p>
                  <li>
                      <AccountCircleOutlinedIcon  className="icon" />
                      <span>Profile</span>
                  </li>
                  <li>
                      <ExitToAppOutlinedIcon  className="icon" />
                      <span>Logout</span>
                  </li>
              </ul>

          </div>
          <div className="bottom">
              <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
              <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
          </div>
    </div>
  )
}

export default Sidebar;
