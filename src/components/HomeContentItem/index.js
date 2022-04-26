import React from "react";

export function HomeContentItem({ title, description }) {
   return (
      <div className="HomeContentItem__container">
         <div className="HomeContentItem__container--title">
            <h2>{title}</h2>
         </div>
         <div className="HomeContentItem__container--description">
            <p>{description}</p>
         </div>
      </div>
   );
}
