import React from "react";

export function ImageContainer({ src, alt = "XD" }) {
   return (
      <div className="documentation--container__image">
         <img src={src} alt={alt} />
      </div>
   );
}
