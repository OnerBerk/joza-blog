import Link from "next/link";
import {useState, useEffect} from "react";
import {getAuthor, getFeaturedImage} from "../../pages/api/utils/request";
import DOMPurify from "dompurify";


import styles from "./post.module.scss"
import {Ipost} from "../../domain/domain";

type PostCard = {
    post: Ipost
}

const PostCard = ({post}: PostCard) => {
    const [postImgAndAuthor, setPostImgAndAuthor] = useState({featImgUrl: '', author: ''});
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            const author = getAuthor(post.author);
            const featuredImg = getFeaturedImage(post.featured_media);

            Promise.all([author, featuredImg]).then((res) => {
                setPostImgAndAuthor({
                    author: res[0],
                    featImgUrl: res[1]
                })
            })
        }
        return () => {
            mounted = false
        }
    }, [])

    const data = post.excerpt.rendered
    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(data.substring(0, 100) + "...")
    })

    return (
        <div className={styles.postCardMain}>
            <img
                alt="image du post"
                className={styles.img}
                src={postImgAndAuthor ? postImgAndAuthor.featImgUrl : ''}/>
            <div className={styles.postCardInfo}>
                <div className={styles.postCardTitle}>
                    <Link href={`/post/${post.id}`}><a>{post.title.rendered}</a></Link>
                    <h5>
                        {new Date(post.date).toDateString()}
                        <span>{' by '}{postImgAndAuthor.author}</span>
                    </h5>
                </div>


                <div className={styles.postCardContent} dangerouslySetInnerHTML={sanitizedData()}/>
                <Link href={`/post/${post.id}`}>
                    <a className={styles.postCardContinue}>Continue reading </a>
                </Link>

            </div>

        </div>
    )

}
export default PostCard