import React, { useEffect } from "react";

import { TitleContainer } from "@Components/titleContainer";
import { ParagraphContainer as Parag } from "@Components/paragraphContainer";
import { ImageContainer } from "@Components/imageContainer";
import { CodeContainer } from "@Components/codeContainer";

import "@Styles/Documentation.css";
import { SectionContainerDocs } from "../../components/SectionContainerDocs";

export function Documentation({ callback, anchorRef, setSLettersOpts }) {
   callback();

   function scrollToTop() {
      window.scroll(0, 0);
   }

   useEffect(() => {
      scrollToTop();
      document.body.classList = "";
      setSLettersOpts({
         Slide1: [false, false],
         Slide2: [false, false],
         Slide3: [false, false],
         Slide4: [false, false],
         Slide5: [false, false],
         Slide6: [false, false]
      })
   }, []);

   return (
      <div className="documentation--container">
         <SectionContainerDocs anchorRef={anchorRef}>
            <TitleContainer title="Principios Basicos" />
            <Parag
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
               nec mi quam. Sed dolor magna, facilisis quis nisl id, gravida
               condimentum turpis. Donec sagittis id dui nec tempor. Donec
               maximus sit amet nulla vitae elementum. Sed nec vestibulum ipsum."
            />
            <ImageContainer src="https://i.ibb.co/xXHxDTb/the-Future1.jpg" />
            <Parag
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
               nec mi quam. Sed dolor magna, facilisis quis nisl id, gravida
               condimentum turpis. Donec sagittis id dui nec tempor. Donec
               maximus sit amet nulla vitae elementum. Sed nec vestibulum ipsum."
            />
            <CodeContainer code={`<WrappingLetters word="XD" />`} />
         </SectionContainerDocs>
         <SectionContainerDocs
            anchorRef={anchorRef}
            sectionClass="principios__basicos"
         >
            <TitleContainer title="Principios Basicos" />
            <Parag
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
               nec mi quam. Sed dolor magna, facilisis quis nisl id, gravida
               condimentum turpis. Donec sagittis id dui nec tempor. Donec
               maximus sit amet nulla vitae elementum. Sed nec vestibulum ipsum."
            />
            <ImageContainer src="https://i.ibb.co/xXHxDTb/the-Future1.jpg" />
            <Parag
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
               nec mi quam. Sed dolor magna, facilisis quis nisl id, gravida
               condimentum turpis. Donec sagittis id dui nec tempor. Donec
               maximus sit amet nulla vitae elementum. Sed nec vestibulum ipsum."
            />
            <CodeContainer code={`<WrappingLetters word="XD" />`} />
         </SectionContainerDocs>
         <SectionContainerDocs anchorRef={anchorRef} sectionClass="wordOptions">
            <TitleContainer title="Principios Basicos" />
            <Parag
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
               nec mi quam. Sed dolor magna, facilisis quis nisl id, gravida
               condimentum turpis. Donec sagittis id dui nec tempor. Donec
               maximus sit amet nulla vitae elementum. Sed nec vestibulum ipsum."
            />
            <ImageContainer src="https://i.ibb.co/xXHxDTb/the-Future1.jpg" />
            <Parag
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
               nec mi quam. Sed dolor magna, facilisis quis nisl id, gravida
               condimentum turpis. Donec sagittis id dui nec tempor. Donec
               maximus sit amet nulla vitae elementum. Sed nec vestibulum ipsum."
            />
            <CodeContainer code={`<WrappingLetters word="XD" />`} />
         </SectionContainerDocs>
         <SectionContainerDocs anchorRef={anchorRef} sectionClass="Structure">
            <TitleContainer title="Principios Basicos" />
            <Parag
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
               nec mi quam. Sed dolor magna, facilisis quis nisl id, gravida
               condimentum turpis. Donec sagittis id dui nec tempor. Donec
               maximus sit amet nulla vitae elementum. Sed nec vestibulum ipsum."
            />
            <ImageContainer src="https://i.ibb.co/xXHxDTb/the-Future1.jpg" />
            <Parag
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
               nec mi quam. Sed dolor magna, facilisis quis nisl id, gravida
               condimentum turpis. Donec sagittis id dui nec tempor. Donec
               maximus sit amet nulla vitae elementum. Sed nec vestibulum ipsum."
            />
            <CodeContainer code={`<WrappingLetters word="XD" />`} />
         </SectionContainerDocs>
      </div>
   );
}
