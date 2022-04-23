import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "@Styles/Navbar.css";

export function Navbar({ path, scrollPosition }) {
   const [navState, setNavState] = useState("default");
   const [isVisible, setIsVisible] = useState(false);

   function navContent(navState) {
      return navState;
   }

   useEffect(() => {
      if (scrollPosition >= document.body.clientHeight - window.innerHeight)
         setIsVisible(false);
      else if (scrollPosition > window.innerHeight) setIsVisible(true);
      else setIsVisible(false);
   }, [scrollPosition]);

   useEffect(() => {
      switch (path) {
         case "/":
            setNavState(b);
            break;

         case "":
            setNavState(b);
            break;

         default:
            setNavState(a);
            break;
      }
   }, [path]);

   return (
      <>
         <nav className={`navbar-container${isVisible ? " show" : ""}`}>
            {path === "/" ? (
               <span className="wrapping-letters--logo">WL</span>
            ) : (
               <Link to="/" className="anchor_with--logo">
                  <span className="wrapping-letters--logo">WL</span>
               </Link>
            )}
            <div className="navbar-container__content">
               {/* <Link to="">Getting started</Link> */}
               {navContent(navState)}
            </div>
         </nav>
         {a === setNavState ? (
            <div className="sideBar__docs-container"></div>
         ) : null}
      </>
   );
}

const a = (
   <>
      <a href="https://github.com/srtager555/wrapping-letters" target="_blanks">
         GitHub
      </a>
      <Link to="/docs">Npm</Link>
      <div className="navbar-menu__button">
         <span className="navbar-menu__button--line"></span>
         <span className="navbar-menu__button--line"></span>
      </div>
   </>
);
const b = (
   <>
      <a href="https://github.com/srtager555/wrapping-letters" target="_blanks">
         GitHub
      </a>
      <Link to="/docs">Documentation</Link>
   </>
);
