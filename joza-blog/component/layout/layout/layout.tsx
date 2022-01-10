import React, {useEffect, useState} from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import moment from "moment";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import styles from "./layout.module.scss"

type LayoutProps = {
    children: React.ReactNode
    title: string
    meta: string
}

const Layout = ({children, title, meta}: LayoutProps) => {
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
        <div className={styles.layoutMain}>
            <Head>
                <title>{title}</title>
                <meta name={meta} content="joz'blog home page"/>
            </Head>

            <h1>
                <div className={styles.layoutMainTitle}>
                    Bienvenue sur Joz'Blog
                    <strong> -- News sur la vie du developpeur </strong>
                </div>
                <div className={styles.link}>
                    {homelink()}
                    <a href="https://www.linkedin.com/company/11029366/admin/" target="_blank"><FontAwesomeIcon
                        icon={faLinkedin}/></a>
                    <a href="https://www.instagram.com/joza.it/" target="_blank"><FontAwesomeIcon
                        icon={faInstagram}/></a>
                </div>

            </h1>
            <div className={styles.layoutBody}>
                {children}
            </div>
            <footer>
                <a
                    href="https://www.joza-it.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <span>{' Joza-it '}{moment(Date.now()).format('YYYY')}</span>
                </a>
            </footer>
        </div>
    )
}
export default Layout