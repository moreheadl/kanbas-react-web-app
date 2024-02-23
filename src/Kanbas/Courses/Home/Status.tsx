import { FaBan, FaBullhorn, FaCheckCircle, FaCrosshairs, FaEllipsisV, FaPlusCircle, FaRegArrowAltCircleRight, FaRegBell } from "react-icons/fa"
import "./index.css"
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { statuses } from "../../Database"
import { useParams } from "react-router";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";



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

      const { courseId } = useParams();
      const statusesList = statuses.filter((status) => status._id === courseId);
      const [selectedStatus] = useState(statusesList[0]);

      
    return (
        <>
        <h3>Course Status</h3>
        <h3>{courseId}</h3>
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

      <div>
        
      <h5 className="fw-bold">To Do</h5>
      </div>
        <hr/>
    <div className="row">
      <ul>
        {statusesList.map((status, index) => (
          <div>
            {selectedStatus._id === status._id && (
              <div>
                {status.todos?.map((todo, index) => (
                  <div>
                    <div className="d-flex row">
                    <div className="wd-circle">1</div>
                    <div className="col wd-status-assignments">
                        <h6>{todo.name}
                            <IoIosClose className="wd-status-todo-close float-end"/>
                        </h6>
                    </div>
                    </div>
                        <p className="wd-status-todo-details">{todo.points} points &#x2022; {todo.date} at {todo.time} </p>
                  </div>
               
                  
                ))}
              </div>
            )}
          </div>
        ))}
      </ul>
      </div>
  

       

{/* 

        <div class="row">
            
        </div>
    </div>
    <div>
        <h5 class="fw-bold">Coming Up
            &nbsp;&nbsp;&nbsp;
            <a href="#" style="font-size: 11; color: red; text-decoration: none;">
                <i class="fa fa-calendar-o" style="color: black;"></i>
                View Calendar
            </a>
            
        </h5>
        <hr>
            <div class="col wd-status-assignments"> 
                <h6><i class="fa fa-calendar-o black"></i>Lecture</h6>
                <p> CS4550.12631.202410 </br>
                    Sep 11 at 11:45am</p>
            </div>
            <div class="col wd-status-assignments"> 
                <h6><i class="fa fa-calendar-o black"></i>CS5610 06 SP23 Lecture</h6>
                <p>CS4550.12631.202410 </br>
                    Sep 11 at 6pm</p>
            </div >
            <div class="col wd-status-assignments"> 
                <h6><i class="fa fa-calendar-o black"></i>CS5610 Web Development</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Summer 1 2023 - LECTURE</h6>
                <p> CS4550.12631.202410 </br>
                    Sep 11 at 7pm</p >
            </div >
        <p class="text-danger">12 more in the next week ...</p>
      
    </div > */}
    </>
    );

}

export default Status;