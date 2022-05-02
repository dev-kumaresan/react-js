
import './App.css';
import ReactDOM from "react-dom/client";
import Home from './Home';

function App() {
  return (
  
        <div><Home /></div>

  );
}
const home = ReactDOM.createRoot(document.getElementById('home'));
home.render(<Home />);

export default Home;