import React from "react";

export function CodeContainer({ code }) {
   return (
      <div className="documentation--container__code">
         <pre>
            <code>{code}</code>
         </pre>
      </div>
   );
}
