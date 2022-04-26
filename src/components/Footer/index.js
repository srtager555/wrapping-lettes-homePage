import React from "react";

import "@Styles/Footer.css";

export default function Footer() {
   return (
      <div className="footer--container">
         <div className="footer--image">
            <a href="https://ttager.page/" target="_blank">
               <img src="https://i.ibb.co/KjX78L4/Port-folio-TD.png" />
            </a>
         </div>
         <div className="footer--text">
            <span>WL Home page, version 0.1.0</span>
            <span>WL Home page © 2022</span>
         </div>
      </div>
   );
}
