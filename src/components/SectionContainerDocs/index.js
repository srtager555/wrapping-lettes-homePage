import React, { useEffect, useRef } from "react";

export function SectionContainerDocs({
   children,
   sectionClass = "",
   anchorRef,
}) {
   const observerObj = useRef(null);

   function handleObserveDoc(entries) {
      const [entry] = entries;

      let anchorVinculed = Object.entries(anchorRef.current.childNodes).filter(
         (e) => e[1].children[0].hash.slice(1) === observerObj.current.id
      );

      if (entry.isIntersecting) {
         anchorVinculed[0][1].className += " active";
      } else {
         anchorVinculed[0][1].className = "sideBar__docs-container__anchor"
      }
   }

   useEffect(
      function () {
         const options = {
            root: null,
            rootMargin: `0px`,
            threshold: 0.2,
         };

         const observer = new IntersectionObserver(handleObserveDoc, options);
         if (observerObj.current) {
            observer.observe(observerObj.current);
         }
         return () => {
            if (observerObj.current) {
               observer.unobserve(observerObj.current);
            }
         };
      },
      [observerObj]
   );

   return (
      <div
         ref={observerObj}
         id={`${sectionClass != "" ? `${sectionClass}` : ""}`}
         className="documentation--container__main"
      >
         {children}
      </div>
   );
}
