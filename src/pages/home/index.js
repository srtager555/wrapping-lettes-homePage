import React, { useLayoutEffect } from "react";

export function Home({ setSLettersOpts={} }) {
   useLayoutEffect(() => {
      setSLettersOpts({ Slide1: [true, true], Slide2: [true, true] });
   }, []);

   return <div>Home</div>;
}
