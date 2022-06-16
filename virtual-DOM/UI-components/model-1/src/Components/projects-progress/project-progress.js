import "./project-progress.css";

function ProjectProgress(props){
    return(
        <div className="project-progress-card">
        <div className="content-holder">
        <div className="project-progress-content">
        <div className="project-header">Projects Progress</div>
        <div className="navigation-tap">
                 <div className="dots">
                   <span className="dot1"></span>
                    <div className="space"></div>
                  <span className="dot2"></span>
                   <div className="space"></div>
                  <span className="dot2"></span>
                 </div>
               </div>
        </div>
        <div className="circleProgressBar">
        <div className="circularProgress">
        <svg  xmlns="http://www.w3.org/2000/svg" height="115" width="200" viewBox="0 0 225 200" data-value="40">
  <path class="bg" stroke="#534cbc" d="M41 149.5a77 77 0 1 1 117.93 0"  fill="none"/>
  <path class="meter" stroke="#09c" d="M41 149.5a77 77 0 1 1 117.93 0" fill="none" stroke-dasharray="350" stroke-dashoffset="350"/>
</svg>
        </div>
        <div className="percentage"></div>
        <div className="percentageNumber">{props.Progress.percentage}</div>
        <div className="RP">{props.Progress.rem_projects}</div>
        </div>
        </div>
        </div>
    );
}
export default ProjectProgress;