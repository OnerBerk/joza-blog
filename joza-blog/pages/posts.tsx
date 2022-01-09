import {useEffect, useState} from "react";
import {getAllPosts} from "./api/utils/request";
import PostCard from "../component/postCard/post-card";
import CardsListLayout from "../component/layout/cards-list-layout/cards-list-layout";
import Head from "next/head";

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const postsFromServer = await getAllPosts();
            setPosts(postsFromServer);
        }
        getPosts()
    }, [])
    return (
        <CardsListLayout title="Joz'Blog">
            <Head>
                <title>Joz'Blog -Posts </title>
                <meta name="Joz'Blog" content="joz'blog home page"/>
            </Head>
                {posts && posts.map((post,index)=>{
                    return(
                        <PostCard key={index} post={post}/>
                    )
                })}
        </CardsListLayout>
    )
}
export default Posts