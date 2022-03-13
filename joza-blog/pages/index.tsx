import type {NextPage} from 'next'
import Layout from "../component/layout/layout/layout";
import Posts from "./post/posts";
import Footer from "../component/footer/footer";
import React from "react";

const Home: NextPage = () => {
    return (
        <>
            <Layout meta='Joza Blog home page' title="Joz'Blog">
                <Posts/>
            </Layout>
        </>
    )
}
export default Home
