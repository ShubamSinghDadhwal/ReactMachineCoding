const useNode = () => {
    const toggleNode = (tree, parentId, isParentChecked) => {
        if (tree.id === parentId) {
            tree.isChecked = !tree.isChecked;
            // first time when above condition is met => our parent is found and for that isParentChecked is undefined
            // But for its children it wont be undefined
            if (isParentChecked) {
                tree.isChecked = isParentChecked;
            }
            tree.items.map(child => toggleNode(child, child.id, tree.isChecked));
        } else {
            tree.items.map(child => toggleNode(child, parentId));
        }
        let isAllChecked = true;
        tree.items.forEach(child => {
            isAllChecked = isAllChecked && child.isChecked;
        })
        if (isAllChecked && tree.items.length > 0) {
            tree.isChecked = true;
        } 
        else if (!isAllChecked && tree.items.length > 0) {
            tree.isChecked = false;
        }
        return tree;
    }
    return [toggleNode];
}

export default useNode