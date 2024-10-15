import React, { useEffect, useRef, useState } from 'react';
import {ReactComponent as UpArrow} from "./assets/up-arrow.svg";
import {ReactComponent as DownArrow} from "./assets/down-arrow.svg";
import Action from './Action';

const Comment = ({
    comment,
    handleInsertNode,
    handleEditNode,
    handleDeleteNode,
}) => {
    // sole respo -> render the comment it gets & if nested => recursively
    // call himself again with the every child comment

    // **Please note -> every comment has its own comment component, so a id will be enough to identify it
    // Also whenver i m clicking on any comment for reply, i m actually clicking on the parent, so parentId is known

    const inputRef = useRef(null);
    const [inputText, setInputText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode])
    

    const handleAddComment = () => {
        setExpand(true);
        handleInsertNode(comment.id, inputText);
        // after inserting hide the input & clear input text
        setShowInput(false);
        setInputText('');
    };

    const handleEditComment = () => {
        handleEditNode(comment.id, inputRef?.current?.innerText);
        setEditMode(false);
    }

    const handleDelete = () => {
        handleDeleteNode(comment.id);
    };

    return (
        <>
            {comment.id === '1'
                ? (
                    <div>
                        <input
                            type="text"
                            value={inputText}
                            onChange={e => setInputText(e.target.value)}
                        />
                        <Action type="COMMENT" handleClick={handleAddComment} />
                    </div>
                )
                : (
                    <div style={{ border: `1px solid #ddd`, padding: 10, marginTop: 10 }}>
                        <span
                            ref={inputRef}
                            contentEditable={editMode}
                            suppressContentEditableWarning={editMode}
                        >
                            {comment.name}
                        </span>
                        <div style={{ display: 'flex', gap: 10 }}>
                            {editMode ? (
                                <>
                                    <Action type="SAVE" handleClick={handleEditComment} />
                                    <Action
                                        type="CANCEL"
                                        handleClick={() => {
                                            inputRef.current.innerText = comment.name;
                                            setEditMode(false);
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    <Action
                                        type={<> 
                                            {expand 
                                                    ? <UpArrow width={10} height={10} />
                                                    : <DownArrow width={10} height={10} />
                                            } REPLY
                                        </>}
                                        handleClick={() => {
                                            setShowInput(true);
                                            setExpand(prevExpand => !prevExpand);
                                        }} 
                                    />
                                    <Action type="EDIT" handleClick={() => setEditMode(true)} />
                                    <Action type="DELETE" handleClick={handleDelete} />
                                </>
                            )}
                        </div>
                    </div>
                )
            }
            <div style={{ paddingLeft: 25, display: expand ? 'block' : 'none' }}>
                {/* showInput should be shown on replying a comment => for first comment its taken care of as it doesn't contain reply
                    and in that case our inputText property takes value from the other input comp => only one input comp per comment
                */}
                {showInput && (
                    <div style={{ display: 'flex', gap: 20 }}>
                        <input
                            type="text"
                            onChange={e => setInputText(e.target.value)}
                        />
                        <Action type="REPLY" handleClick={handleAddComment} />
                        <Action
                            type="CANCEL"
                            handleClick={() => {
                                if (comment.items?.length === 0) setExpand(false);
                                setShowInput(false);
                            }}
                        />
                    </div>
                )}
                {comment.items.map(childComment => (
                    <Comment
                        key={childComment.id}
                        comment={childComment}
                        handleInsertNode={handleInsertNode}
                        handleEditNode={handleEditNode}
                        handleDeleteNode={handleDeleteNode}
                    />
                ))}
            </div>
        </>
    )
}

export default Comment