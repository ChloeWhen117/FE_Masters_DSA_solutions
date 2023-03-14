function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    //base case - at the end when curr is undefined
    if (!curr) {
        return path;
    }
    path.push(curr.value);
    walk(curr.left, path);
    walk(curr.right, path);

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    // const path: number[] = [];
    return walk(head, []);

    // return path;
}
