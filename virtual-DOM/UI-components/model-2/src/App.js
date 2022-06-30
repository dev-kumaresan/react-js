import Image from "./Components/Image/Image";
import Name from "./Components/Name/Name";
import Objective from "./Components/Objective/Objective";
import Edu from "./Components/Edu-qualification/Edu";
function App() {
return (
  <>
  <div className="Image-Container">
    <Image />
  </div>
  <div className="Name-Container">
    <Name />
  </div>
  <div className="Objective-Container">
    <Objective />
  </div>
  <div className="Edu-Container">
    <Edu />
  </div>
  </>
  );
}

export default App;
