import "./revenue-status.css";
function RevenueStatus(props)
{
    return(
        <div className="card-holder">
            <div className="logo">
                <div className="circle"></div>
                <div className="dollar">$</div>
            </div>
            <div className="total-revenue">
                <div className="title">Total Revenue</div>
                <div className="revenue">{props.Revenue.revenue}</div>
            </div>
            <div className="progress-bar">
            <div class="full">
                <div class="percentage"></div>
            </div>
           </div>
        </div>
    );
}
export default RevenueStatus;