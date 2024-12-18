import React from 'react'
import Homeherobanner from '@/components/homepagecomponents/herobanner'
import Realtimeinfosection from '@/components/homepagecomponents/realtimeinfosection'
import Servicessection from '@/components/homepagecomponents/servicessection'
import Visionsection from '@/components/homepagecomponents/visionsection'

import Carimage2 from "@/assets/images/carimage2.webp";
import Carimage4 from "@/assets/images/carimage4.webp";

export default function Homepgage() {
    return (
        <>
            <Homeherobanner />
            <Visionsection />
            <Servicessection
                title="autonomous driving"
                paragraph="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
                buttonlink={"/"}
                image={Carimage2}
                style={{ display: "block" }}
            />
            <Realtimeinfosection />
            <Servicessection
                title="perception enabled"
                paragraph="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
                buttonlink={"/"}
                image={Carimage4}
                style={{ display: "none" }}
            />
        </>
    )
}
