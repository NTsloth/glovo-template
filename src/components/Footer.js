import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footerDiv}>
                <div className={styles.footerLogo}>
                    <img src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/glovo-white.svg" alt="Glovo" />
                </div>
                <div className={styles.realFooter}>
                    <div className={styles.footerLinks}>
                        <h4>შემოგვიერთდი</h4>
                        <ul>
                            <li><a href="/">ვაკანსიები</a></li>
                            <li><a href="/">Glovo პარტნიორებისთვის</a></li>
                            <li><a href="/">გლოვერები</a></li>
                            <li><a href="/">Glovo Business</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>გაიგე მეტი</h4>
                        <ul>
                            <li><a href="/">ჩვენ შესახებ</a></li>
                            <li><a href="/">ხშირად დასმული კითხვები</a></li>
                            <li><a href="/">ბლოგი</a></li>
                            <li><a href="/">დაგვიკავშირდი</a></li>
                            <li><a href="/">უსაფრთხოება</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>გამოგვყევი სოციალურ ქსელებში
                        </h4>
                        <ul>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Instagram</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        <img src="https://res.cloudinary.com/glovoapp/image/fetch//w_105,h_35,c_fit,q_auto/https://glovoapp.com/images/app_store/download-button-new.svg" alt="" />
                        <img src="https://res.cloudinary.com/glovoapp/image/fetch//w_112,h_35,c_fit,q_auto/https://glovoapp.com/images/google_play/download-button-new.svg" alt="" />
                        <ul>
                            <li><a href="/">წესები და პირობები</a></li>
                            <li><a href="/">კონფიდენციალურობის პოლიტიკა</a></li>
                            <li><a href="/">ქუქი-ფაილების პოლიტიკა</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Footer;