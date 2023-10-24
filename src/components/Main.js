import React from "react";
import styles from "./Main.module.css"


const Main = () => {
    return (
        <div className={styles.mainView}>
           
            <div className={styles.mainTitle}>
                <div className={styles.mainIntro}>
                       <h1>გამოსცადე მიტანა ქალაქში: <span>თბილისში</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Main;