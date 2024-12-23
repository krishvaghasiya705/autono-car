import Digitalsection from "@/components/techpagecomponents/digitalsection";
import Techpagesummerysection from "@/components/techpagecomponents/techpagesummerysection";
import Theautonsection from "@/components/techpagecomponents/theautonosection";
import Techpage from "@/pages/techpage";
import React from "react";

export default function Technology() {
  return (
    <>
      <Techpage />
      <Theautonsection />
      <Techpagesummerysection
        title1={"HUMAN-CENTERED DESIGN"}
        title2={"LOW EMISSIONS & EFFICIENCY"}
        paragraph1={
          "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        }
        paragraph2={
          "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        }
        sectioncolor="var(--colorblack)"
        textcolor="var(--colorwhite)"
      />
      <Digitalsection />
      <Techpagesummerysection
        title1={"ADVANCED CYBER SECURITY"}
        title2={"REAL-TIME INFORMATION"}
        paragraph1={
          "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        }
        paragraph2={
          "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        }
        textcolor="var(--colorblack)"
        sectioncolor="var(--colorwhite)"
      />
    </>
  );
}
