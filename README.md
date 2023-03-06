# typescriptWunitTest

//typescript file (merge.ts)

function merge(collection_1: number[], collection_2: number[]): number[] {
    const mergedCollection: number[] = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < collection_1.length && index2 < collection_2.length) {
        if (collection_1[index1] < collection_2[index2]) {
            mergedCollection.push(collection_1[index1]);
            index1++;
        } else {
            mergedCollection.push(collection_2[index2]);
            index2++;
        }
    }
    while (index1 < collection_1.length) {
        mergedCollection.push(collection_1[index1]);
        index1++;
    }
    while (index2 < collection_2.length) {
        mergedCollection.push(collection_2[index2]);
        index2++;
    }
    return mergedCollection;
}

//run npm install -g typescript
// run tsc merge.ts
// add module.exports = merge; to bottom of merge.js file
//to execute add console.log() then run node merge.js

//test file merge.test.js

const merge = require('./merge')
describe("merge", () => {
    test("should merge two sorted arrays of equal length", () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const expected = [1, 2, 3, 4, 5, 6];

        expect(merge(collection_1, collection_2)).toEqual(expected);
    });

    test("should merge two sorted arrays of different lengths", () => {
        const collection_1 = [1, 3, 5, 7];
        const collection_2 = [2, 4, 6];
        const expected = [1, 2, 3, 4, 5, 6, 7];

        expect(merge(collection_1, collection_2)).toEqual(expected);
    });

    test("should merge two sorted arrays with duplicate values", () => {
        const collection_1 = [1, 3, 3, 5];
        const collection_2 = [2, 3, 4, 6];
        const expected = [1, 2, 3, 3, 3, 4, 5, 6];

        expect(merge(collection_1, collection_2)).toEqual(expected);
    });
});


//run npm init -y then run npm i --save-dev jest
//run npm install
//run npm run test
//dependecies jest
