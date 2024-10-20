import React, { useState } from 'react';
import { data } from './data'; 
import Checkbox from './Checkbox';
import useNode from './useNode';

const NestedCheckboxes = () => {
    const [toggleNode] = useNode();
    const [checkboxData, setCheckboxData] = useState(data);

    const handleToggleNode = (id) => {
        console.log(checkboxData, "b4");
        const newCheckboxData = toggleNode(checkboxData, id);
        console.log(checkboxData, "after");
        setCheckboxData({ ...newCheckboxData })
    };
    
    return (
        <Checkbox checkboxData={checkboxData} handleToggleNode={handleToggleNode} key={checkboxData.id} />
    )
}

export default NestedCheckboxes;