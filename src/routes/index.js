import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useInPath } from "@Hooks/useInPath";

import { SlideLetters } from "@Components/SlideLetters";
import { Home } from "@Pages/home";
import { Navbar } from "@Components/navbar";

export function routes({ scrollPosition }) {
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
         <Navbar path={inPath} scrollPosition={scrollPosition} />
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
            <Route path="/docs" element={<div>documetation</div>} />
            <Route path="/documentation" element={<Redirect to="/docs" />} />
            <Route path="/*" element={<div>otra linea</div>} />
         </Routes>
      </>
   );
}
