import React from "react";
import moment from "moment";
import styles from  "./footer.module.scss"


const Footer=()=>{
    return(
        <footer className={styles.footerMain}>
            <a
                href="https://www.joza-it.fr/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by <span>{' Joza-it '}{moment(Date.now()).format('YYYY')}</span>
            </a>
        </footer>
    )
}
export default Footer