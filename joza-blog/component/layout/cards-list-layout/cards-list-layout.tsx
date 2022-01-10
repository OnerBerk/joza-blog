import Head from "next/head";
import styles from "./cards-list-layout.module.scss"
import {getAllCategories} from "../../../pages/api/utils/request";
import {useEffect, useState} from "react";
import {Icategorie} from "../../../domain/domain";
import Tag from "../../tags/tag";

type PostList = {
    categorieList: []
    setCategorieList: (categorieList: []) => void
    setCategorieId: (categorieId: number) => void
    title: string
    children: React.ReactNode
}

const CardsListLayout = (
    {
        children,
        title,
        categorieList,
        setCategorieList,
        setCategorieId
    }: PostList) => {

    useEffect(() => {
        const getCategorieList = async () => {
            const res = await getAllCategories()
            setCategorieList(res)
        }
        getCategorieList()
    }, [])


    return (
        <div className={styles.postsLayoutMain}>
            <Head>
                <title>{title}</title>
                <meta name="Joz'blog" content="joz'blog home page"/>
            </Head>
            <div className={styles.postsLayoutBody}>
                <div className={styles.postsLayoutCategories}>
                    {categorieList.map((categorie: Icategorie, categorieIdx) => {
                        return (
                            <Tag
                                onClick={() => setCategorieId(categorie.id)}
                                key={categorie.id}
                                title={categorie.name}/>
                        )
                    })}

                </div>
                <div className={styles.postsLayoutChildren}>
                    {children}
                </div>

            </div>
        </div>
    )
}
export default CardsListLayout