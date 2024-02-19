// comma separate dlist for multiple imports
import { apiKey, abc } from "./util.js";

// default value import, define a name now and still define the path
import defaultApiKey from "./util.js";

// multiple imports grouped together as a JavaScript object (any name, this example is named util)
import * as util from "./util.js";

console.log("This is the imported API key: " + apiKey);
console.log(abc);
console.log(`This is the default API key: ${defaultApiKey}`);

// multiple imports grouped together as a JavaScript object, console logged with dot notation
console.log("multiple imports console log: " + util.abc);
