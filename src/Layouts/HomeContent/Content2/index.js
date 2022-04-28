import React from "react";
import WL from "wrapping-letters-react";

function Container() {

   return (
      <div className="letter-container">
         <WL
            word="Add general class and special class"
            wordOptions={[
               {
                  ClassToAdd: "letter-wrapp",

                  SelectClass: {
                     wordToSearch: "class",
                     classToAdd: "bold-letter",
                  },
               },
            ]}
         />
      </div>
   );
}

export function Content2() {
   return [
      [
         <Container />,
         "Are you need CSS class in the letters?, No problem with wordOptions.",
      ],
      `
import WL from "wrapping-letters-react";

const letterContainer = useRef(null);

return (
    <div className="letter-container">
        <WL
            word="Add general class and special class"
            wordOptions={[
                {
                    ClassToAdd: "letter-wrapp",

                    SelectClass: {
                        wordToSearch: "class",
                        classToAdd: "bold-letter",
                    },
                },
            ]}
        />
    </div>
);
      `,
   ];
}
