
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Page1 from './page1';
import Page2 from './page2';
import Links from './links';
function Home(){
    return(
        <div className="content">
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<Links />}>
                <Route path="/page1" element={<Page1 />}/>
                <Route path="/page2" element={<Page2 />}/>
             </Route>
            </Routes>
        </BrowserRouter>
        </div>
        
    );
}   

export default Home;
// Page1();
// Page2();