

import ProfileCard from "./Components/user-detail-card/profile-card";
function App() {
  const userData = {
    name:"Laura cowe",
    position:"UX/UI Designer",
    projects:"125",
    title1 : "Projects",
    revenue:"$124",
    title2 : "Revenue"
  }
  return (
   // Home Page
   <div>
    <ProfileCard userData={userData}/>
   </div>
  );
}

export default App;
