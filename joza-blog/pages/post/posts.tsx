import {useEffect, useState} from "react";
import {getAllPosts} from "../api/utils/request";
import PostCard from "../../component/postCard/post-card";
import CardsListLayout from "../../component/layout/cards-list-layout/cards-list-layout";
import Head from "next/head";
import {Ipost} from "../../domain/domain";
import React from "react";
import Paper from "../../component/paper/paper";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [categorieId, setCategorieId] = useState<number>(1)

    useEffect(() => {
        const getPosts = async () => {
            const postsFromServer = await getAllPosts();
            setPosts(postsFromServer);
        }
        getPosts()
    }, [])


    return (
        <Paper>
            <CardsListLayout
                categorieId={categorieId}
                setCategorieId={setCategorieId}
                title="Joz'Blog">
                <Head>
                    <title>{"Joz'Blog -Posts"} </title>
                    <meta name="Joz'Blog" content="joz'blog home page"/>
                </Head>
                {posts && posts.map((post: Ipost, index) => {
                    return (
                        <React.Fragment key={post.id}>
                            {
                                categorieId === post.categories[0] &&
                                <PostCard post={post}/>

                            }
                        </React.Fragment>
                    )
                })}
            </CardsListLayout>
        </Paper>
    )
}
export default Posts