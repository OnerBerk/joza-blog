import React from "react";
import Head from "next/head";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import styles from "./layout.module.scss"

type LayoutProps = {
    children: React.ReactNode
    title: string
    meta: string
}

const Layout = ({children, title, meta}: LayoutProps) => {
    return (
        <div className={styles.layoutMain}>
            <Head>
                <title>{title}</title>
                <meta name={meta} content="joz'blog home page"/>
            </Head>
            <Header/>
            <div className={styles.layoutBody}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
export default Layout