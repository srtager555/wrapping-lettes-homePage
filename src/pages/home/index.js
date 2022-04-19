import React, { useLayoutEffect } from "react";

import { HomeSwitch } from "@Components/HomeSwitch";

import "@Styles/HomePage.css";

export function Home({ setSLettersOpts = {} }) {
   useLayoutEffect(() => {
      setSLettersOpts({ Slide1: [true, true], Slide2: [true, true] });
   }, []);

   return (
      <div className="HomePage__main">
         <HomeSwitch />
         <HomeSwitch bottom={true}/>
      </div>
   );
}
