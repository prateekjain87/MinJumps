const minJumps = function main(arr) {
    let hmap = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 2] !== arr[i] || arr[i - 1] !== arr[i])
            hmap.push(arr[i]);
    }
    arr = hmap;

    let index = {};

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        index[temp] = index[temp] || [];
        index[temp].push(i);
    }

    let next = new Array(arr.length).fill(+Infinity);

    next[0] = 0;

    let updated = true;

    while (updated) {
        updated = false;

        for (let i = 0; i < arr.length; i++) {
            let shifted = next[i];


            for (let ind of [i - 1, i + 1, ...index[arr[i]]]) {
                changed(ind, shifted + 1);
            }
        }
    }

    return next.pop();


    function changed(i, change) {
        if (i < 0 || i >= arr.length) return;

        if (next[i] > change) {
            next[i] = change;
            updated = true;
        }
    }
};
