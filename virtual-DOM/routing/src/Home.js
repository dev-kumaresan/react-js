
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Page1 from './page1';
import Page2 from './page2';
function Home(){
    return(
        <div>
        <div className='Home'>Welcome to My Home Page</div>
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<Home />}>
                <Route path="/page1" element={<Page1 />}/>
                <Route path="/page2" element={<Page2 />}/>
             </Route>
            </Routes>
        </BrowserRouter>
        </div>
        
    );
}
const page1 = ReactDOM.createRoot(document.getElementById('Page1'));
page1.render(<Page1 />);
const page2 = ReactDOM.createRoot(document.getElementById('Page2'));
page2.render(<Page2 />);
export default Home;
// Page1();
// Page2();