"use strict";

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.promise");

require("core-js/modules/es7.promise.finally");

var _math = require("./math");

var num1 = 5,
    num2 = 10;
console.log('Add: ', (0, _math.add)(num1, num2));
console.log('Multiply: ', (0, _math.multiply)(num1, num2));
//# sourceMappingURL=app.js.map