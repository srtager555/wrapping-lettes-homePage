import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { SlideLetters } from "@Components/slideLetters";
import { Home } from "@Pages/home";


export function routes({ scrollPosition }) {

   const [sLettersOpts, setSLettersOpts] = useState({});

   return (
      <>
        <SlideLetters sLettersOpts={sLettersOpts} scrollPosition={scrollPosition} />
         <Routes>
            <Route path="/" element={<Home setSLettersOpts={setSLettersOpts} />} />
            <Route path="/documentation" element={<div>documetation</div>} />
            <Route path="/*" element={<div>otra linea</div>} />
         </Routes>
      </>
   );
}
