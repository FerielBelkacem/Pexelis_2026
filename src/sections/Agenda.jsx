import agendaTitle from "../assets/agenda/T1.png"
import designPhase from "../assets/agenda/designPhase.png"
import day1 from "../assets/agenda/day1.png"
import day2 from "../assets/agenda/day2.png"
import day3 from "../assets/agenda/day3.png"
import day4 from "../assets/agenda/day4.png"
import BigFooter from "../assets/agenda/OMC F.svg"
import devPhase from "../assets/agenda/devPhase.png"
import "../Style/agenda.css"

export default function Agenda() {
  return (
    <div className="agenda-page">
      <div className="agenda-content">
        {/* Main Header Section */}
        <header className="agenda-header">
          <img src={agendaTitle} className="agenda-title" alt="Pexelis Agenda" />
          <div className="header-details">
            <h2 className="sprint-subtitle">Design & Development Sprint</h2>
            <p className="date-badge">February 5-11, 2026</p>
          </div>
        </header>

        <div className="timeline-wrapper">
          {/* DESIGN PHASE SECTION */}
          <div className="phase-row">
            <div className="phase-sidebar">
              {/* This label starts exactly with Day 1 */}
              <img src={designPhase} className="phase-img" alt="Design Phase" />
            </div>
            
            <div className="phase-main">
               {/* Day 1 starts here */}
              <img src={day1} className="day-card" alt="Day 1" />
              <img src={day2} className="day-card2" alt="Day 2" />
            </div>
          </div>

          {/* Spacer/Icon between phases like the code icon in original */}
          <div className="phase-divider">
             <span className="code-icon">{"{ }"}</span>
          </div>

          {/* DEV PHASE SECTION */}
          <div className="phase-row">
            <div className="phase-sidebar">
              {/* This label starts exactly with Day 3 */}
              <img src={devPhase} className="phase-img" alt="Dev Phase" />
            </div>
            
            <div className="phase-main">
              <img src={day3} className="day-card" alt="Day 3" />
              <img src={day4} className="day-card2" alt="Day 4" />
            </div>
          </div>
        </div>

        <img src={BigFooter} className="footer-img" alt="OMC Footer" />
      </div>
    </div>
  );
}