import React, { useState } from 'react'
import Comment from './Comment';
import { comments } from './data';
import useNode from './hooks/useNode';

const InfiniteNestedComments = () => {
    const {insertNode, editNode, deleteNode} = useNode();
    const [commentsData, setCommentsData] = useState(comments);

    const handleInsertNode = (parentId, value) => {
        const newCommentsData = insertNode(commentsData, parentId, value);
        // setCommentsData(newCommentsData);
    };

    const handleEditNode = (parentId, value) => {
        const newCommentsData = editNode(commentsData, parentId, value);
        setCommentsData(newCommentsData);
    }

    const handleDeleteNode = (parentId, value) => {
        const newCommentsData = deleteNode(commentsData, parentId, value);
        setCommentsData(newCommentsData);
    }

    return (
        <div>
            <Comment
                comment={commentsData}
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDeleteNode={handleDeleteNode}
            />
        </div>
    )
}

export default InfiniteNestedComments
