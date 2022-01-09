import styles from "./cards-list-layout.module.scss"
import Head from "next/head";

type PostList = {
    title: string
    children: React.ReactNode
}

const CardsListLayout = ({children, title}: PostList) => {
    return (
        <div className={styles.postsLayoutMain}>
            <Head>
                <title>{title}</title>
                <meta name="Joz'blog" content="joz'blog home page"/>
            </Head>
            <div className={styles.postsLayoutBody}>{children}</div>
        </div>
    )
}
export default CardsListLayout