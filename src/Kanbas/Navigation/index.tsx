import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaRegQuestionCircle } 
    from "react-icons/fa";
import NEU from "./neu";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { LuMonitorPlay } from "react-icons/lu";



function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-kanbas-navigation-i-color" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 wd-kanbas-navigation-i-color" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 wd-kanbas-navigation-i-color" /> },
    { label: "Inbox",   icon: <FaInbox className="fs-2 wd-kanbas-navigation-i-color"/>},
    { label: "History", icon: <FaRegClock className="fs-2 wd-kanbas-navigation-i-color" />  },
    { label: "Studio",   icon: <LuMonitorPlay className="fs-2 wd-kanbas-navigation-i-color" />           },
    { label: "Commons",  icon: <FaArrowRightFromBracket className="fs-2 wd-kanbas-navigation-i-color" /> },
    { label: "Help",  icon: <FaRegQuestionCircle className="fs-2 wd-kanbas-navigation-icon-size wd-kanbas-navigation-i-color" /> },
  ];
  
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
        <li><NEU/></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))};

    </ul>
  );
}
export default KanbasNavigation;