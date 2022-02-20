import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import styles from "./header.module.scss";

const Header = () => {
    const routeur = useRouter()
    const currentPath = routeur.pathname
    const [home, setHome] = useState(false)
    useEffect(() => {
        if (currentPath === "/") {
            setHome(true)
        }
    }, [])
    const homelink = () => {
        return (
            !home && <a href={"/"}><FontAwesomeIcon icon={faHome}/></a>
        )
    }
    return (
        <div className={styles.headerMain}>
            <h1>
                <div className={styles.layoutMainTitle}>
                   <a href={"/"}>
                       Bienvenue sur {"Joz'Blog"}
                       <strong> -- News sur la vie du developpeur </strong>
                   </a>
                </div>
                <div className={styles.link}>
                    {homelink()}
                    <a href="https://www.linkedin.com/company/11029366/admin/" target="_blank" rel="noreferrer"><FontAwesomeIcon
                        icon={faLinkedin}/></a>
                    <a href="https://www.instagram.com/joza.it/" target="_blank" rel="noreferrer"><FontAwesomeIcon
                        icon={faInstagram}/></a>
                </div>

            </h1>
        </div>
    )
}

export default Header