import ProfileCard from "./Components/user-detail-card/profile-card";
import RevenueStatus from "./Components/Revenue-status/revenue-status";
function App() {
  const userData = {
    name:"Laura cowe",
    position:"UX/UI Designer",
    projects:"125",
    title1 : "Projects",
    revenue:"$124",
    title2 : "Revenue"
  }
  const Revenue = {
    revenue:"$92,983"
  }
  return (
   <>
   <div>
    <ProfileCard userData={userData}/>
   </div>
   <div className="card-holder">
      <RevenueStatus Revenue={Revenue}/>
   </div>
   </>
  );
}
export default App;
