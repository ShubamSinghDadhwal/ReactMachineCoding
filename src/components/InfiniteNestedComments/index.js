import React, { useState } from 'react'
import Comment from './Comment';
import { comments } from './data';

const InfiniteNestedComments = () => {
    const [commentsData, setCommentsData] = useState(comments);
    return (
        <div>
            <Comment comment={commentsData} />
        </div>
    )
}

export default InfiniteNestedComments
