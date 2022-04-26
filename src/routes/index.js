import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useInPath } from "@Hooks/useInPath";

import { SlideLetters } from "@Components/SlideLetters";
import { Navbar } from "@Components/navbar";
import { Home } from "@Pages/home";
import { Documentation } from "@Pages/documentation";

import NotFound from "@Pages/notFound";
import Footer from "@Components/Footer";

export function routes({ scrollPosition }) {
   const sideNavRef = useRef(null);

   const [sLettersOpts, setSLettersOpts] = useState({});
   const [inPath, setInPath] = useState("");

   function Redirect({ to }) {
      let navigate = useNavigate();
      useEffect(() => {
         navigate(to);
      });
      return null;
   }

   return (
      <>
         <Navbar
            path={inPath}
            scrollPosition={scrollPosition}
            sideNavRef={sideNavRef}
         />
         <SlideLetters
            sLettersOpts={sLettersOpts}
            scrollPosition={scrollPosition}
         />
         <Routes>
            <Route
               path="/"
               element={
                  <Home
                     setSLettersOpts={setSLettersOpts}
                     scrollPosition={scrollPosition}
                     callback={() => {
                        useInPath(setInPath);
                     }}
                  />
               }
            />
            <Route
               path="/docs"
               element={
                  <Documentation
                     anchorRef={sideNavRef}
                     setSLettersOpts={setSLettersOpts}
                     callback={() => {
                        useInPath(setInPath);
                     }}
                  />
               }
            />
            <Route path="/documentation" element={<Redirect to="/docs" />} />
            <Route
               path="/*"
               element={<NotFound setSLettersOpts={setSLettersOpts} />}
            />
         </Routes>
         <Footer />
      </>
   );
}
