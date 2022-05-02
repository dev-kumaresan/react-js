import { Outlet, Link } from "react-router-dom";
function Links() {
  return (
    <>
    <div>
      <nav>
        <ul className="links">
        
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">page1</Link>
          </li>
          <li>
            <Link to="/page2">page2</Link>
          </li>
        </ul>
      </nav>
     </div>
      <Outlet />
    </>
  );
};

export default Links;