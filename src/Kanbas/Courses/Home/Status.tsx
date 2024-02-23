import { FaBan, FaBullhorn, FaCheckCircle, FaCrosshairs, FaEllipsisV, FaPlusCircle, FaRegArrowAltCircleRight, FaRegBell } from "react-icons/fa"
import "./index.css"
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import TodoList from "./TodoList";
import ComingUp from "./ComingUp";




function Status() {
    const btns = [
        { label: "Import Existing Content",   icon: <FaArrowRightFromBracket />    },
        { label: "Import from Commons", icon: <FaRegArrowAltCircleRight />  },
        { label: "Choose Home Page",   icon: <FaCrosshairs />    },
        { label: "View Course Stream",  icon: <IoBarChartSharp />    },
        { label: "New Announcement",   icon: <FaBullhorn />    },
        { label: "New Analytics", icon: <IoBarChartSharp/>  },
        { label: "View Course Notifications",   icon: <FaRegBell/>           },
      ];
      
    return (
        <>
        <h3>Course Status</h3>
        <div className="row">
        <div>
            <button><FaBan />Unpublish</button>
            <button className="btn btn-success"><FaCheckCircle /> Published</button>
        </div>
    </div>
    <br/>
      {btns.map((btn, index) => (
          <button> {btn.icon} {btn.label} </button>
      ))}
      <br/><br/>        

        <TodoList/>
        <ComingUp/>

  

       

{/* 

        
            
       
      
    </div > */}
    </>
    );

}

export default Status;