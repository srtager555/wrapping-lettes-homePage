import React, { useEffect } from "react";

import "@Styles/multimedia.css";

export default function Multi({ setSLettersOpts, callback }) {
   // callback();

   useEffect(() => {
      setSLettersOpts({
         Slide1: [false, false],
         Slide2: [false, false],
         Slide3: [false, false],
         Slide4: [false, false],
         Slide5: [false, false],
         Slide6: [false, false],
      });
   }, []);

   return (
      <div className="c">
         <div className="ch">
            <span className="wrapping-letters--logo">WL</span>
         </div>
      </div>
   );
}
