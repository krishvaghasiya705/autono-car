import React from 'react'
import styles from "./visionsection.module.scss"
import Carimage1 from "@/assets/images/carimage1.webp"
import Image from 'next/image'

export default function Visionsection() {
    return (
        <div className={styles.visionsectionmain}>
            <div className='container2'>
                <div className={styles.visionsectionflxmain}>
                    <div className={styles.visionsectionflxcontentmain}>
                        <span className={styles.visiontitle}>VISION</span>
                        <h2>We're Changing the Way the World Thinks About Cars</h2>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                        <div className={styles.cusoverflowdesignemain}>
                            <div className={styles.cusoverflowdesigne}>
                                <div className={styles.cusoverflowdesigneline}></div>
                                <div className={styles.cusoverflowdesignethumb}></div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.visionsectionflximage}>
                        <Image src={Carimage1} alt="Carimage1" width={10000000000} height={10000000000} />
                    </div>
                </div>
            </div>
        </div>
    )
}
