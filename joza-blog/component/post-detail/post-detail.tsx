import parse from "html-react-parser";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock, faUser} from "@fortawesome/free-solid-svg-icons";
import styles from "./post-detail.module.scss"

type PostDetailProps = {
    featuredImg: string
    author: string
    content: string
    date: Date
    title: string
}


const PostDetail = ({title, featuredImg, date, content, author}: PostDetailProps) => {
    return (
        <main>
            <div className={styles.postDetailImg}>
                <div className={styles.postDetailLayer}>
                    <img alt="Post image" src={featuredImg}/>
                </div>
                <div className={styles.postDetailInfo}>
                    <h1>{title}</h1>
                    <div className={styles.postDetailAuthor}>
                        <span><FontAwesomeIcon icon={faUser}/> Written by {author}</span>
                        <span><FontAwesomeIcon icon={faClock}/>Published on {new Date(date).toDateString()}</span>
                    </div>
                </div>
            </div>

            <div className={styles.postDetailContent}>{parse(content)}</div>
        </main>
    )
}
export default PostDetail