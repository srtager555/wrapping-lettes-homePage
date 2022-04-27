import React, { useState, useEffect } from "react";

// This container is maded for the section "documentation"

export function TitleContainer({ title, type = "h2" }) {
   const [titleType, setTitleType] = useState(type);

   const h2 = (
      <div className="documentation--container__title">
         <h2>{title}</h2>
      </div>
   )
   const h3 = (
      <div className="documentation--container__title">
         <h3>{title}</h3>
      </div>
   )
   const h4 = (
      <div className="documentation--container__title">
         <h4>{title}</h4>
      </div>
   )

   useEffect(() => {
      switch (type) {
         // case "h1":
         //    setTitleType(h1);
         //    break;
         case "h2":
            setTitleType(h2);
            break;
         case "h3":
            setTitleType(h3);
            break;
         case "h4":
            setTitleType(h4);
            break;
         default:
            setTitleType(h2);
            break;
      }
   }, []);

   return titleType;
}
