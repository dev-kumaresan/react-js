import "./free-slots.css";

function FreeSlots(){
    return(
        <div className="free-slots-card">
            <div className="header">
                <div className="card-heading">Free Slots Available</div>
                <div className="opt-enable">
                    <div className="hr-line"></div>
                    <div className="circle"></div>
                </div>
                <div className="calender">
                <div className="dates">
                    <div className="date1">
                        <div className="date">12</div>
                        <div className="month">June</div>
                    </div>
                    <div className="date2">
                        <div className="date">18</div>
                        <div className="month">June</div>
                    </div>
                    <div className="date3">
                        <div className="date">20</div>
                        <div className="month">June</div>
                    </div>
                </div>
                <div className="dates2">
                    <div className="date-one">
                        <div className="date">02</div>
                        <div className="month">July</div>
                    </div>
                    <div className="date-two">
                        <div className="date">10</div>
                        <div className="month">July</div>
                    </div>
                    <div className="date-three">
                        <div className="date">15</div>
                        <div className="month">July</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default FreeSlots;