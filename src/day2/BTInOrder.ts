function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    //base case - at the end when curr is undefined
    if (!curr) {
        return path;
    }

    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    // const path: number[] = [];
    return walk(head, []);

    // return path;
}
