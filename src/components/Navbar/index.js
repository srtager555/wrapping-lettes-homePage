import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "@Styles/Navbar.css";
import "@Styles/SideBarDocs.css";

export function Navbar({ path, scrollPosition, sideNavRef }) {
   const [navState, setNavState] = useState("default");
   const [isVisible, setIsVisible] = useState(false);
   const [openMobileMenu, setOpenMobileMenu] = useState(false);

   function navContent(navState) {
      return navState;
   }

   function handleActiveMobileMenu() {
      setOpenMobileMenu(!openMobileMenu);
   }

   const a = (
      <>
         <a
            href="https://github.com/srtager555/wrapping-letters"
            target="_blanks"
         >
            GitHub
         </a>
         <Link to="/docs">NPM</Link>
      </>
   );

   const b = (
      <>
         <a
            href="https://github.com/srtager555/wrapping-letters"
            target="_blanks"
         >
            GitHub
         </a>
         <Link to="/docs">Documentation</Link>
      </>
   );

   useEffect(() => {
      if (path === "/") {
         if (scrollPosition >= document.body.clientHeight - window.innerHeight)
            setIsVisible(false);
         else if (scrollPosition > window.innerHeight) setIsVisible(true);
         else setIsVisible(false);
      }
   }, [scrollPosition]);

   useEffect(() => {
      console.log(path);
      switch (path) {
         case "/":
            setNavState(b);
            break;

         case "":
            setNavState(b);
            break;

         default:
            setNavState(a);
            setIsVisible(true);
            break;
      }
   }, [path]);

   return (
      <>
         <nav
            className={`navbar-container${isVisible ? " show" : ""}${
               path != "/" ? " docs" : ""
            } `}
         >
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
               <div
                  className={`navbar-menu__button${
                     openMobileMenu ? " active" : ""
                  }`}
                  onClick={handleActiveMobileMenu}
               >
                  <span className="navbar-menu__button--line"></span>
                  <span className="navbar-menu__button--line"></span>
               </div>
            </div>
         </nav>
         {path === "/docs" ? (
            <div
               className={`sideBar__docs-container${
                  openMobileMenu ? " active" : ""
               }`}
            >
               <div className="sideBar__docs-dark__Background"></div>
               <div ref={sideNavRef} className="sideBar__docs-container__links">
                  <div className="sideBar__docs-container__anchor">
                     <a href="#principios__basicos">Principios Basicos</a>
                  </div>
                  <div className="sideBar__docs-container__anchor">
                     <a href="#wordOptions">wordOptions</a>
                  </div>
                  <div className="sideBar__docs-container__anchor">
                     <a href="#Structure">Structure</a>
                  </div>
               </div>
            </div>
         ) : null}
      </>
   );
}
