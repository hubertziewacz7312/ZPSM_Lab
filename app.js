const _ = require('lodash');

function srednia(arr) {
    return _.mean(arr)
}

console.log(srednia([1,2,3,4,5]));