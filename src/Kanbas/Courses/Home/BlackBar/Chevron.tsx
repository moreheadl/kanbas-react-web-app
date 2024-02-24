import { FaBars, FaBook, FaInbox, FaRegCalendarAlt, FaRegClock, FaRegQuestionCircle, FaRegUserCircle, FaTachometerAlt } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";
import { LuMonitorPlay } from "react-icons/lu";
import { Link } from "react-router-dom";
import "../index.css"
import { useState } from "react";



function Chevron() {
    const [isCollapse1Open, setIsCollapse1Open] = useState(false);
    const [isCollapse2Open, setIsCollapse2Open] = useState(false);

    
    const handleCollapse1Toggle = () => {
        setIsCollapse1Open(!isCollapse1Open);
            if (isCollapse2Open) {
               setIsCollapse2Open(false);
        //   setIsExpanded(!isExpanded);
        }
      };
    
    const links = [
        { label: "Account",   icon: <FaRegUserCircle />  },
        { label: "Dashboard", icon: <FaTachometerAlt />  },
        { label: "Courses",   icon: <FaBook />           },
        { label: "Calendar",  icon: <FaRegCalendarAlt/> },
        { label: "Inbox",   icon: <FaInbox />},
        { label: "History", icon: <FaRegClock />  },
        { label: "Studio",   icon: <LuMonitorPlay />           },
        { label: "Commons",  icon: <FaArrowRightFromBracket /> },
        { label: "Help",  icon: <FaRegQuestionCircle /> },
      ];
    return (
        <>
      <div>
        <Link
          to="#"
          onClick={handleCollapse1Toggle}
          aria-expanded={isCollapse1Open}
          aria-controls="collapseExample"
          style={{ color: "black", fontSize: "20px" }}>
          <FaBars />
        </Link>
        {isCollapse1Open && (
          <div id="collapseExample">
            <ul className="wd-collapse-list">
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.label}>
                    {link.icon}
                    <span className="wd-collapse-list-text-pad">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
        </>
    )
}

export default Chevron;