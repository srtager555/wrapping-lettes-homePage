import React, { useState, useLayoutEffect } from "react";

import { routes as Content } from "@Src/routes";

export function App() {
   const [scrollPosition, setScrollPosition] = useState(0);

   function handleScrollPosition() {
      setScrollPosition(window.scrollY);
   }

   useLayoutEffect(() => {
      handleScrollPosition();
      window.addEventListener("scroll", handleScrollPosition);
      return () => window.removeEventListener("scroll", handleScrollPosition);
   }, []);

   return (
      <>
         <Content scrollPosition={scrollPosition} />
      </>
   );
}
