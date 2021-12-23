function myEach(collection, fn) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

    for (let i = 0; i < newCollection.length; i++) {
        fn(newCollection[i])
    }

    return collection;
};

function myMap(collection, fn) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
    let array = [];

    for (let i = 0; i < newCollection.length; i++) {
        array.push(fn(newCollection[i]))
    };

    return array;
};

function myReduce(collection, fn, start=0) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

    if (!start) {
        start = newCollection[0]
        newCollection = newCollection.slice(1)
    };

    for (let i = 0; i < newCollection.length; i++) {
        start = fn(start, newCollection[i], newCollection);
    };

    return start;
};

function myFind(collection, fn) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

    for (let i = 0; i < newCollection.length; i++) {
        if (fn(newCollection[i])) {
            return newCollection[i];
            break;
        };
    };
};

function myFilter(collection, fn) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
    let array = [];

    for (let i = 0; i < newCollection.length; i++) {
        if (fn(newCollection[i])) {
            array.push(newCollection[i]);
        };
    };
    return array;
};

function mySize(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection).length;
};

function myFirst(array, n) {
    if (!n) {
        return array[0]
    } else {
        return array.slice(0, n)
    };
};

function myLast(array, n) {
    if (!n) {
        return array[array.length -1];
    } else {
        return array.slice(-n);
    };
};

function myKeys(obj) {
    let array = [];
    for(let key in obj) {
        array.push(key);
    };
    return array;
};

function myValues(obj) {
    let array = [];
    for(let key in obj) {
        array.push(obj[key]);
    };
    return array;
};