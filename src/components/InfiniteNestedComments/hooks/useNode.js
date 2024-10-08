const useNode = () => {
    const insertNode = (tree, parentId, value) => {
        console.log(tree, parentId, value);
    };
    const editNode = (tree, parentId, value) => {};
    const deleteNode = (tree, parentId, vale) => {};

    return { insertNode, editNode, deleteNode };
}

export default useNode