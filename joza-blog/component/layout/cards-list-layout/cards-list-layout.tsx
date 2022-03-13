import React from "react";
import Head from "next/head";
import CategoriesCaroussel from "../../categories-carrousel/categories-caroussel";
import styles from "./cards-list-layout.module.scss"

type PostList = {
    categorieId: number
    setCategorieId: (categorieId: number) => void
    title: string
    children: React.ReactNode
}

const CardsListLayout = (
    {
        categorieId,
        setCategorieId,
        children,
        title,
    }: PostList) => {
    return (
        <div className={styles.postsLayoutMain}>
            <Head>
                <title>{title}</title>
                <meta name="Joz'blog" content="joz'blog home page"/>
            </Head>
            <div className={styles.postsLayoutBody}>
                <CategoriesCaroussel
                    categorieId={categorieId}
                    setCategorieId={setCategorieId}/>
                <div className={styles.postsLayoutChildren}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default CardsListLayout