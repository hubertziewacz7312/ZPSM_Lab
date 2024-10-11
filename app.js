const _ = require('lodash');

function srednia(arr) {
    return _.mean(arr)
}

function min(arr) {
    return _.min(arr)
}

function max(arr) {
    return _.max(arr)
}

console.log(srednia([1,2,3,4,5]));