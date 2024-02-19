// comma separated list for multiple imports
import { apiKey, abc } from "./util.js";

// default value import, define a name now and still define the path
import defaultApiKey from "./util.js";

console.log("This is the imported API key: " + apiKey);
console.log(abc);
console.log(`This is the default import API key: ${defaultApiKey}`);

// multiple imports grouped together as a JavaScript object (any name, this example is named util)
import * as util from "./util.js";

// multiple imports grouped together as a JavaScript object, console logged with dot notation
console.log("multiple imports console log: " + util.abc);
console.log("multiple imports console log: " + util.apiKey);
console.log("Default import: " + util.default);

// as keyword to asign an alias
import { abc as content } from "./util.js";
console.log("abc with alias content: " + content);
