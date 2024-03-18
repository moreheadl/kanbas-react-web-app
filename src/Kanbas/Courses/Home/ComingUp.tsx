import db from "../../Database"
import { useParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

function ComingUp() {
    const { courseId } = useParams();
    const statusesList = db.statuses.filter((status) => status._id === courseId);
    const [selectedStatus] = useState(statusesList[0]);
    const coursesList = db.courses.filter((course) => course._id === courseId);
    const [selectedCourse] = useState(coursesList[0]);


    return (
     <>
        <h5 className="fw-bold">Coming Up
            <Link to={`#`} className="wd-status-coming-calendar float-end"> <FaRegCalendarAlt/> View Calendar </Link>
        </h5>


        <hr/>
        <div className="row">
        <ul>
        {statusesList.map((status, index) => (
            <div>
            {selectedStatus._id === status._id && (
                <div>
                {status["coming up"]?.map((task, index) => (
                    <div className="d-flex row">
                    <div className="col wd-status-assignments">
                        <div className="row">
                            <div className="col-1">
                                <FaRegCalendarAlt/>
                            </div>
                            <div className="col-11">
                                <h6 className="wd-status-cu-left-red">{task.name}</h6>
                                <p>{selectedCourse.name}</p>
                                <p className="wd-status-details">{task.date} at {task.time} </p>
                            </div>    
                        </div>
                    </div>
                    </div>
                
                    
                ))}
                </div>
            )}
            </div>
        ))}
        <p className="text-danger">12 more in the next week ...</p>
        </ul>
        </div>
    </>
    )
}
export default ComingUp;