import React from 'react'
import { Layout, Post } from '../components';
import { getAllPostsData } from '../lib/posts';

const BlogPage = ({ posts }) => {
    return (
        <Layout title="Blog">
            <ul className="m-10">
                {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            </ul>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const posts = await getAllPostsData()
    return {
        props: { posts },
    }
}

export default BlogPage
