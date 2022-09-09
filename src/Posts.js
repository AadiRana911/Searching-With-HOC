import React from 'react'
import withSearch from './withSearch'

function Posts({ data }) {
    let renderPosts = data.map(post => <h4 key={post.id}>{post.title}</h4>)
    return (
        <div>
            {renderPosts}
        </div>
    )
}

const PostsWithSearch = withSearch(Posts, 'posts');
export default PostsWithSearch