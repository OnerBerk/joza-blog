import {useEffect, useState} from "react";
import Head from 'next/head'
import type {NextPage} from 'next'
import Link from "next/link";

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Joz'Blog</title>
                <meta name="Joz'blog" content="joz'blog home page"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.title}>
                    <h1>Welcome to
                        <a href="https://www.joza-it.fr/" target="_blank">
                            {" Joz'Blog"}
                        </a>
                    </h1>
                    <strong> Blog pour la vie du developpeur </strong>
                </div>
                <div className={styles.homeBody}>
                    <Link href={"/posts"}>Posts </Link>
                </div>

                <footer className={styles.footer}>
                    <a
                        href="https://www.joza-it.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' Joza-it '}
                    </a>
                </footer>
            </main>
        </div>
    )
}

export default Home
