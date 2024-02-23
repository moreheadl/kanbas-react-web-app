import { FaGlasses } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { useLocation, useParams } from "react-router";

function Breadcrumb() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const currPage = pathname.split('/').pop()



    return (
        <>
            <div className="d-flex flex-column">
                <nav aria-label="breadcrumb" className="wd-breadcrumb-full">
                    <ol className="breadcrumb">
                        <li>
                            <button className="wd-burger-b1">
                                <HiMiniBars3/>
                            </button>
                        </li>
                        <li className="breadcrumb-item">
                            {courseId}
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{currPage}</li>
                        <li className="testing">
                            <button><FaGlasses/> Student View</button>
                            </li>
                    </ol>
                </nav>
                <hr/>
            </div>
        </>
    );

}

export default Breadcrumb;