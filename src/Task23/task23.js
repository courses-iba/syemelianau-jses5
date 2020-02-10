function byTagName(node, tagName) {
    var nodes = [];
    for (var i = 0; i < node.children.length; ++i) {
        if (node.children[i].tagName.toLowerCase() === tagName.toLowerCase()) {
            nodes.push(node.children[i]);
        }
        nodes = nodes.concat(byTagName(node.children[i], tagName));
    }
    /* returns an array containing all descendant element nodes
     * with the given tag name */
    return nodes;
}
