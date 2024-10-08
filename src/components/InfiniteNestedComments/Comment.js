import React, { useState } from 'react';
import {ReactComponent as UpArrow} from "./assets/up-arrow.svg";
import {ReactComponent as DownArrow} from "./assets/down-arrow.svg";
import Action from './Action';

const Comment = ({ comment }) => {
    // sole respo -> render the comment it gets & if nested => recursively
    // call himself again with the every child comment

    const [inputText, setInputText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);

    const handleAddComment = () => {};
    const handleDelete = () => {};

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
                        <button
                            handleClick={handleAddComment}
                        >
                            Comment
                        </button>
                    </div>
                )
                : (
                    <div style={{ border: `1px solid #ddd`, padding: 10, marginTop: 10 }}>
                        <span>{comment.name}</span>
                        <div style={{ display: 'flex', gap: 10 }}>
                            {editMode ? (
                                <>
                                    <Action type="SAVE" handleClick={handleAddComment} />
                                    <Action type="CANCEL" handleClick={() => setEditMode(false)} />
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
                        <Action type="CANCEL" handleClick={() => setShowInput(false)} />
                    </div>
                )}
                {comment.items.map(childComment => (
                    <Comment comment={childComment} key={childComment.id} />
                ))}
            </div>
        </>
    )
}

export default Comment