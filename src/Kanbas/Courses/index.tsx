import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Assignments from "./Assignments";
import CourseNavigation from "./Navigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";
import Breadcrumb from "./Breadcrumb";


function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="wd-full-screen">
      <div className="d-flex flex-column w-100">
        <Breadcrumb />
        <div className="d-flex flex-fill">
          <div className="d-none d-md-block">
            < CourseNavigation />
          </div>
          <div className="flex-fill">
          <div
            className="overflow-y-scroll bottom-0 end-0"
            style={{ left: "2px", top: "50px"}} >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Courses;