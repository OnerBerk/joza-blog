import axios from 'axios';
import {getAuthor, getFeaturedImage} from "../api/utils/request";
import {POSTS_API_URL} from "../api/endpoints";
import parse from "html-react-parser"
import Head from "next/head";
import Layout from "../../component/layout/layout/layout";

type PostProps = {
    featuredImg:string
    author:string
    content:string
    date:Date
    title:string
}

const Post = ({title,featuredImg, author, content, date}: PostProps) => {
    return (
        <Layout meta="Post" title="Joz'Blog - Article">
            <main>
                <h1>{title}</h1>
                <div>
                    <img src={featuredImg}/>
                </div>
                <p>Written by {author}</p>
                <p>Published on {new Date(date).toDateString()}</p>
                <div>{parse(content)}</div>
            </main>

        </Layout>
    );
}

// cette fonction est appelé au build
export async function getStaticPaths() {
    const res = await axios.get(POSTS_API_URL);
    const posts = res.data;
    // recupere le path du post que l'ont va rendre
    const paths = posts.map((post: { id: any }) => ({
        params: {id: post.id.toString()},
    }));
    // seulement ce path seras pre rendu
    return {paths, fallback: false};
}

// This also gets called at build time
export async function getStaticProps({params}: any) {
    const res = await axios.get(`${POSTS_API_URL}/${params.id}`);
    const post = await res.data;
    const featuredImg = await getFeaturedImage(post.featured_media);
    const author = await getAuthor(post.author);
    return {
        props: {title: post.title.rendered, content: post.content.rendered, featuredImg, author, date: post.date},
    };
}

export default Post