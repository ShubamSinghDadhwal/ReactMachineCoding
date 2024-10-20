import React from 'react'

const Checkbox = ({ checkboxData, handleToggleNode }) => {
    const handleClick = () => {
        handleToggleNode(checkboxData.id);
    }

    return (
        <>
            {checkboxData.id !== 1 && (
                <div>
                    <input
                        type="checkbox"
                        checked={checkboxData.isChecked}
                        onChange={handleClick}
                    />
                    <span>{checkboxData.name}</span>
                </div>
            )}
            <div style={{ paddingLeft: 30 }}>
                {checkboxData.items.map(child => <Checkbox checkboxData={child} handleToggleNode={handleToggleNode} key={checkboxData.id} />)}
            </div>
        </>
    )
}

export default Checkbox