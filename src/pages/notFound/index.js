import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "@Styles/NotFound.css"

export default function NotFound({ setSLettersOpts }) {
   useEffect(() => {
      setSLettersOpts({ 
          Slide1: [true, false], 
          Slide2: [true, false],
          Slide3: [true, false],
          Slide4: [true, false],
          Slide5: [true, false],
          Slide6: [true, false]
        });
   }, []);
   return (
      <div className="notFound_container">
         <div className="notFound__container-404">
            <span className="notFound__container-404__404">404</span>
            <span className="notFound__container-404__notMatch">not match</span>
         </div>
         <div className="notFound__container-links">
            <Link to="/">Return to Home </Link>
         </div>
      </div>
   );
}
