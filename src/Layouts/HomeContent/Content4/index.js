import React, { useRef, useEffect } from "react";
import WL from "wrapping-letters-react";
import anime from "animejs";

function Container() {
   const letterContainer = useRef(null);

   useEffect(() => {
      anime({
         targets: letterContainer.current.children,
         translateY: [0, 20, -20, 0],
         duration: 1000,
         loop: true,
         easing: "easeInQuad",
         delay: anime.stagger(100),
      });
   }, []);

   return (
      <div ref={letterContainer} className="letter-container">
         <WL
            word="Animate your text is so easy"
         />
      </div>
   );
}

export function Content4() {
   return [
      [
         <Container />,
         "No problem, with animejs and WL is so easy",
      ],
      `
import WL from "wrapping-letters-react";
import anime from "animejs";

const letterContainer = useRef(null);

useEffect(() => {
   anime({
      targets: letterContainer.current.children,
      translateY: [0, 20, -20, 0],
      duration: 1000,
      loop: true,
      easing: 'easeInQuad',
      delay: anime.stagger(100),
   });
}, []);

return (
   <div 
      ref={letterContainer} 
      className="letter-container"
   >
      <WL
         word="Wrapp any letter is easy"
      />
   </div>
);
      `,
   ];
}
