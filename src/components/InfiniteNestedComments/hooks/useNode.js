const useNode = () => {
    const insertNode = (tree, parentId, value) => {
        console.log(tree, parentId, value);
        // recursively traverse tree
        // adds a new node i/s tree at parentId position
        if (tree.id === parentId) {
            tree.items.push({
                id: Date.now(),
                name: value, 
                items: [],
            })
            return tree;
        }
        let newItems = [];
        newItems = tree.items.map(obj => {
            return insertNode(obj, parentId, value);
            // this return will store the updated obj dto if any
        });
        
        // as we have successfully iterate over the items and store
        // either the old node or updated node successfully
        // => we can replace the items with this new items
        return { ...tree, items: newItems };
    };

    const editNode = (tree, parentId, value) => {
        if (tree.id === parentId) {
            tree.name = value;
            return tree;
        }
        let newItems = [];
        newItems = tree.items.map(obj => {
            return editNode(obj, parentId, value);
        })
        return { ...tree, items: newItems };
    };

    const deleteNode = (tree, parentId) => {
        for (let i = 0; i < tree.items.length; i++) {
            if (tree.items[i].id === parentId) {
                tree.items.splice(i, 1);
                return tree;
            }
            // else recursively search its child for the same
            deleteNode(tree.items[i], parentId);
        }
        // we will reach here if items is empty i.e. it's a leaf comment or not nested
        // in those cases we have to return them as it's
        return tree;
    };

    return { insertNode, editNode, deleteNode };
}

export default useNode