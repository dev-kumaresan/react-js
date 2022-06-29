import React from 'react'
import "./Image.css";
function Image() {
  return (
    <div className="Image">
        <div className="Image-Circle">
        <img className="My-Image" src={process.env.PUBLIC_URL+"Kumaresan.jpg"} height="100" width="100" />
        </div>
    </div>
  )
}

export default Image;