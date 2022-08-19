import React, { useState } from "react";
import "./Sidebar.css";
import { useNavigate, NavLink } from "react-router-dom";
import SidebarData from "./SidebarData";
import { RiMenuLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { FaHeartbeat } from "react-icons/fa";
import { UserAuth } from "../../../../context/AuthContext";

const Sidebar = () => {
  const { user } = UserAuth();

  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(true);

  const sidebarHandler = () => {
    setSidebar(() => !sidebar);
  };

  const logOutHandler = (e) => {
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div>
        <div className="logo">
          <div className="icon">
            <FaHeartbeat />
          </div>
          <div>{sidebar && <h4>Clinic-Space</h4>}</div>
        </div>

        <div className="user">
          <div className="user-icon">{user && user.email[0]}</div>

          {sidebar && <div className="user-name">{/* {!user && `u`} */}</div>}
        </div>

        <div className="sidebar-icon" onClick={sidebarHandler}>
          <RiMenuLine style={{ fontSize: "30px" }} />
        </div>
        <div>
          <ul>
            {SidebarData.map((item, i) => (
              <NavLink key={item.title} to={item.path} className={item.cName}>
                <li>
                  <div>{item.icon}</div>
                  <div>{sidebar && item.title}</div>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
      <NavLink to={"/"} className="logout">
        <div className="logout-area">
          <div>
            <FiLogOut style={{ fontSize: "30px" }} />
          </div>
          <div>{sidebar && <li>Logout</li>}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
