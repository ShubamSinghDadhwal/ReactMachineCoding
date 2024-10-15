import React, { useState } from 'react'
import Comment from './Comment';
// import { comments } from './data';
import useNode from './hooks/useNode';

const InfiniteNestedComments = () => {
    const {insertNode, editNode, deleteNode} = useNode();
    const [commentsData, setCommentsData] = useState({
        id: '1',
        items: [],
    });

    const handleInsertNode = (parentId, value) => {
        const newCommentsData = insertNode(commentsData, parentId, value);
        setCommentsData(newCommentsData);
    };

    const handleEditNode = (parentId, value) => {
        console.log("edited data b4", commentsData);
        const newCommentsData = editNode(commentsData, parentId, value);
        console.log("edited data after", newCommentsData);
        setCommentsData(newCommentsData);
    }

    const handleDeleteNode = (parentId, value) => {
        const newCommentsData = deleteNode(commentsData, parentId, value);
        // spreading is important as state is not detecting it
        const temp = { ...newCommentsData };
        setCommentsData(temp);
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
