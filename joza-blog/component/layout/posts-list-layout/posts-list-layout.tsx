import {NextPage} from "next";
import styles from "./posts-list-layout.module.scss"

type PostList = {
    title: string
    children: React.ReactNode
}

const PostsListLayout = ({children, title}: PostList) => {
    return (
        <div className={styles.postsLayoutMain}>
            <h1>{title}</h1>
            <div className={styles.postsLayoutBody}>{children}</div>
        </div>
    )
}
export default PostsListLayout