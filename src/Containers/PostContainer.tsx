import React from 'react'
import PostContent from '../Components/PostContent';

const PostContainer = () => {
    return (
        <div className='bg-white row-start-1 row-end-3 h-screen bg-white-default overflow-auto'>
            <PostContent />
        </div>
    )
}

export default PostContainer;