import React, { useState, useLayoutEffect, useEffect } from "react";

import { HomeSwitch } from "@Components/HomeSwitch";
import { arrContent } from "../../context/HomeContentList";
import { HomeContentContainer } from "@Components/HomeContentContainer";

import "@Styles/HomePage.css";

export function Home({ setSLettersOpts = {} }) {
   const [colorCounter, setColorCounter] = useState(0);
   const [colorArr, setColorArr] = useState([]);

   useLayoutEffect(() => {
      setSLettersOpts({ Slide1: [true, true], Slide2: [true, true] });
   }, []);
   
   function a() {
      if(colorCounter === 3) {
         setColorCounter(0);
      } else setColorCounter(colorCounter + 1);
   }
   useEffect(() => {
      if(arrContent.length != colorArr.length) {
         a()
         setColorArr([...colorArr, colorCounter]);
      }
   }, [colorCounter])
   
   const e = arrContent.map((e, index) => {
      return (
         <HomeContentContainer
            component={e[0]}
            code={e[1]}
            color={colorArr[index]}
         />
      );
   });

   return (
      <div className="HomePage__main">
         <HomeSwitch />
         {e}
         <HomeSwitch bottom={true} />
      </div>
   );
}
