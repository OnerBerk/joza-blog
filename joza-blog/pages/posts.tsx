import {useEffect, useState} from "react";
import {getAllPosts} from "./api/utils/request";
import PostCard from "../component/postCard/post-card";
import PostsListLayout from "../component/layout/posts-list-layout/posts-list-layout";

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const postsFromServer = await getAllPosts();
            setPosts(postsFromServer);
        }
        getPosts()
    }, [])

    console.log("post",posts)
    return (
        <PostsListLayout title="Post">
                {posts && posts.map((post,index)=>{
                    return(
                        <PostCard key={index} post={post}/>
                    )
                })}
        </PostsListLayout>
    )
}
export default Posts