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