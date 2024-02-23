import { FaBan, FaCheckCircle } from "react-icons/fa"

function Status() {


    return (
        <>
        <h3>Course Status</h3>
        <div className="row wd-status-center">
        <div>
            <button><FaBan />Unpublish</button>
            <button className="btn btn-success"><FaCheckCircle /> Published</button>
        </div>
    </div>
    <br/>
{/* 
    <div class="wd-status-btn">
        <button>
            <i class="fa fa-sign-out"></i>
            Import Existing Content
        </button> </br>
        <button>
            <i class="fa fa-arrow-circle-o-right"></i>
            Import from Commons
        </button> </br >
        <button>
            <i class="fa fa-crosshairs"></i>
            Choose Home Page
        </button> </br >
            <button>
                <i class="fa fa-bar-chart"></i>
                View Course Stream
            </button> </br >
                <button>
                    <i class="fa fa-bullhorn"></i>
                    New Announcement
                </button> </br >
                    <button>
                        <i class="fa fa-bar-chart"></i>
                        New Analytics
                    </button> </br >
                        <button>
                            <i class="fa fa-bell-o"></i>
                            View Course Notifications
                        </button> </br >
    </div > </br >
    <div class="wd-todo">
        <h5 class="fw-bold">To Do</h5>
        <hr>
        <div class="row">
            <div class="wd-circle">1</div>
            <div class="col wd-status-assignments">
                <h6>Grade A1 - ENV + HTML
                    &nbsp;&nbsp;&nbsp;
                    <i class="fa fa-close" style="color: gray;"></i>
                </h6>
                <p style="margin-left: 0px;">100 points &#x2022; Sep 18 at 11:59pm </p>
            </div>
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