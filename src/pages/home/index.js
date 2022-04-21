import React, { useState, useLayoutEffect } from "react";

import { HomeSwitch } from "@Components/HomeSwitch";
import { HomeContentContainer } from "@Components/HomeContentContainer";

import "@Styles/HomePage.css";

export function Home({ setSLettersOpts = {} }) {
   const [colorCounter, setColorCounter] = useState(0);
   const arr = [
      [/*Componente del titulo*/, /*Codigo del componente del titulo(lo importante)*/]
   ]

   useLayoutEffect(() => {
      setSLettersOpts({ Slide1: [true, true], Slide2: [true, true] });
   }, []);

   return (
      <div className="HomePage__main">
         <HomeSwitch />
         {/* Posible solución */}
         {/* {
            arr.map(e => {
               if (colorCounter === 3) setColorCounter(0);
               return <HomeContentContainer component={e} code={e[1]} color={colorCounter} />
            })
         } */}
         <HomeSwitch bottom={true}/>
      </div>
   );
}
