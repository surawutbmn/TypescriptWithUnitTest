function merge(collection_1, collection_2) {
    var mergedCollection = [];
    var index1 = 0;
    var index2 = 0;
    while (index1 < collection_1.length && index2 < collection_2.length) {
        if (collection_1[index1] < collection_2[index2]) {
            mergedCollection.push(collection_1[index1]);
            index1++;
        } else {
            mergedCollection.push(collection_2[index2]);
            index2++;
        }
    }
    // Add any remaining elements from collection_1
    while (index1 < collection_1.length) {
        mergedCollection.push(collection_1[index1]);
        index1++;
    }
    // Add any remaining elements from collection_2
    while (index2 < collection_2.length) {
        mergedCollection.push(collection_2[index2]);
        index2++;
    }
    return mergedCollection;
}
module.exports = merge;