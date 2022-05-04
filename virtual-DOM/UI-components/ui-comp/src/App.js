

import ProfileCard from "./Components/user-detail-card/profile-card";
function App() {
  const userData = {
    name:"xyz",
    position:"UI designer",
    projects:"125",
    revenue:"$124"
  }
  return (
   // Home Page
   <div>
    <ProfileCard userData={userData}/>
   </div>
  );
}

export default App;
