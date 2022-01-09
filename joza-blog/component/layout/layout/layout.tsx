import Head from "next/head";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import styles from "./layout.module.scss"

type LayoutProps = {
    children: React.ReactNode
    title: string
    meta:string
}

const Layout = ({children, title, meta}: LayoutProps) => {
    return (
        <div className={styles.layoutMain}>
            <Head>
                <title>{title}</title>
                <meta name={meta} content="joz'blog home page"/>
            </Head>


            <h1>
                <div>
                    Bienvenue sur Joz'Blog
                    <strong> --News sur la vie du developpeur </strong>
                </div>
                <div className={styles.link}>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faLinkedin}/>
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
                    Powered by <span>{' Joza-it '}</span>
                </a>
            </footer>
        </div>
    )
}
export default Layout