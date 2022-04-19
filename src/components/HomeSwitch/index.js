import React, { useRef } from "react";
import { Link } from "react-router-dom";

export function HomeSwitch({ bottom = false }) {
   const buttonCopyRef = useRef(null);

   function handleCopyNpm() {
      var range = document.createRange(),
         selection = window.getSelection(),
         contentHolder = buttonCopyRef.current;

      selection.removeAllRanges();

      range.selectNodeContents(contentHolder);

      selection.addRange(range);

      document.execCommand("copy");

      selection.removeAllRanges();
   }

   return (
      <>
         <div className="HomePage--introduction">
            <span className="wrapping-letters--logo">WL</span>
            <div className="HomePage--introducion-text">
               <p>
                  {!bottom
                     ? `Wrapp any text in your projects in React with Wrapping Letters,
               Hover effect, Observer intersection, loading animation and more!
               Forget to wrapping any letters in JSX, wrapping letters will do
               it for you.`
                     : `Are you ready?, this is the next level to work with letters.`}
               </p>
            </div>
         </div>
         <div className="HomePage--cta">
            <button
               onClick={handleCopyNpm}
               ref={buttonCopyRef}
               className="HomePage--cta-copyButton"
            >
               npm install wrapping-letters-react -D
            </button>
            <div className={`HomePage--cta-links${bottom? " nowrapp": ""}`}>
               {!bottom ? topLinks() : bottomLinks()}
            </div>
         </div>
      </>
   );
}

function topLinks() {
   return (
      <>
         <Link to="docs/getting-started" className="HomePage--cta-link">
            <span className="HomePage--cta-link-text">Getting Started</span>
         </Link>
         <Link to="docs/api" className="HomePage--cta-link">
            <span className="HomePage--cta-link-text">Documentation</span>
         </Link>
         {/* <Link to="docs/examples" className="HomePage--cta-link">
          <span className="HomePage--cta-link-text">Examples</span>
      </Link>
      <Link to="docs/api" className="HomePage--cta-link">
          <span className="HomePage--cta-link-text">API</span>
      </Link>
      <Link to="docs/support" className="HomePage--cta-link">
          <span className="HomePage--cta-link-text">Support</span>
      </Link>
      <Link to="docs/changelog" className="HomePage--cta-link">
          <span className="HomePage--cta-link-text">Changelog</span>
      </Link>  */}
      </>
   );
}
function bottomLinks() {
   return (
      <>
         <Link to="docs/getting-started" className="HomePage--cta-link">
            <span className="HomePage--cta-link-text">Getting Started</span>
         </Link>
         <Link to="docs/" className="HomePage--cta-link">
            <span className="HomePage--cta-link-text">Documentation</span>
         </Link>
         <Link to="docs/versions" className="HomePage--cta-link">
            <span className="HomePage--cta-link-text">Versions</span>
         </Link>
         <a
            href="https://www.npmjs.com/package/wrapping-letters-react"
            target="_blank"
            className="HomePage--cta-link"
         >
            <span className="HomePage--cta-link-text">Npm</span>
         </a>
         <a
            href="https://github.com/srtager555/wrapping-letters"
            target="_blank"
            className="HomePage--cta-link"
         >
            <span className="HomePage--cta-link-text">GitHub</span>
         </a>
         <a
            href="https://github.com/srtager555/wrapping-letters/issues"
            className="HomePage--cta-link"
         >
            <span className="HomePage--cta-link-text">Report a issue!</span>
         </a>
      </>
   );
}
