import React, { useState, useLayoutEffect } from "react";
import "@Styles/SlideLetters.css";

export function SlideLetters({ sLettersOpts = {} }) {
   const [slide1, setSlide1] = useState([false, false]);
   const [slide2, setSlide2] = useState([false, false]);
   const [slide3, setSlide3] = useState([false, false]);
   const [slide4, setSlide4] = useState([false, false]);
   const [slide5, setSlide5] = useState([false, false]);
   const [slide6, setSlide6] = useState([false, false]);

   const {
      Slide1 = [],
      Slide2 = [],
      Slide3 = [],
      Slide4 = [],
      Slide5 = [],
      Slide6 = [],
   } = sLettersOpts;

   useLayoutEffect(() => {
      setSlide1([Slide1[0], Slide1[1]]);
      setSlide2([Slide2[0], Slide2[1]]);
      setSlide3([Slide3[0], Slide3[1]]);
      setSlide4([Slide4[0], Slide4[1]]);
      setSlide5([Slide5[0], Slide5[1]]);
      setSlide6([Slide6[0], Slide6[1]]);
   }, [sLettersOpts]);

   return (
      <div className="container container__SlideLetters">
         <div
            className={`container__SlideLetters--slideLetter${
               slide1[0] ? "" : " hidden"
            }${slide1[1] ? "" : " opacity"}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
         <div
            className={`container__SlideLetters--slideLetter${
               slide2[0] ? "" : " hidden"
            }${slide2[1] ? "" : " opacity"}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
         <div
            className={`container__SlideLetters--slideLetter${
               slide3[0] ? "" : " hidden"
            }${slide3[1] ? "" : " opacity"}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
         <div
            className={`container__SlideLetters--slideLetter${
               slide4[0] ? "" : " hidden"
            }${slide4[1] ? "" : " opacity"}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
         <div
            className={`container__SlideLetters--slideLetter${
               slide5[0] ? "" : " hidden"
            }${slide5[1] ? "" : " opacity"}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
         <div
            className={`container__SlideLetters--slideLetter${
               slide6[0] ? "" : " hidden"
            }${slide6[1] ? "" : " opacity"}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
      </div>
   );
}
