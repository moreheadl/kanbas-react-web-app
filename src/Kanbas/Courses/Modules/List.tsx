import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { addModule, updateModule, setModule, deleteModule } from "./reducer";


function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
          <div className="d-flex justify-content-end row">
      <div className="d-flex float-end justify-content-end">
          <button type="button">Collapse All</button>
          <button type="button">View Progress</button>
          <select id="select-publish-all">
              <option>
                <FaCheckCircle /> Publish All
              </option>
          </select>
          <button className="btn btn-danger" type="button">
              <FaPlus/>
              Module</button>
          <button type="button">
            <FaEllipsisV/>
          </button>
      </div>
      <div className="row">
        <ul className="list-group">
      <li className="list-group-item">
        <button
          className="btn btn-success wd-limited-padding"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button
          className="btn btn-primary wd-limited-padding"
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <input 
          className="col-lg-7"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
      </li>
      </ul>
      <ul className="list-group wd-modules">

      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
              <button className="btn btn-success wd-change-buttons float-end"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button className="btn btn-danger wd-change-buttons float-end"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: 
                { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      </div>
      </div>
    </>
  );
}
export default ModuleList;