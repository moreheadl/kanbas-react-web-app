import { statuses } from "../../Database"
import { useParams } from "react-router";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

function TodoList() {
    const { courseId } = useParams();
    const statusesList = statuses.filter((status) => status._id === courseId);
    const [selectedStatus] = useState(statusesList[0]);

    return (
     <>
        <h5 className="fw-bold">To Do</h5>
        <hr/>
    <div className="row">
    <ul>
    {statusesList.map((status, index) => (
        <div>
        {selectedStatus._id === status._id && (
            <div>
            {status.todos?.map((todo, index) => (
                <div className="d-flex row">
                <div className="wd-circle">1</div>
                <div className="col wd-status-assignments">
                    <h6>{todo.name}
                        <IoIosClose className="wd-status-todo-close float-end"/>
                    </h6>
                </div>
                    <p className="wd-status-details">{todo.points} points &#x2022; {todo.date} at {todo.time} </p>
                </div>
            
                
            ))}
            </div>
        )}
        </div>
    ))}
    </ul>
    </div>
    </>
    )
}
export default TodoList;