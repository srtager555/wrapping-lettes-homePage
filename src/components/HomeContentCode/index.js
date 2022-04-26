import React, { useRef } from "react";

import { useCopy } from "@Hooks/useCopy";

export function HomeContentCode({ code, color }) {
   const codeRef = useRef(null);

   return (
      <div className={`HomeContentCode__container HomeContentColor${color}`}>
         <button
            className="HomeContentCode__container--buttonCopy"
            onClick={() => useCopy(codeRef)}
         >
            Copy
         </button>
         <div className="HomeContentCode__container--code">
            <pre>
               <code ref={codeRef}>{code}</code>
            </pre>
         </div>
      </div>
   );
}
