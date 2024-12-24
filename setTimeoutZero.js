console.log("Hello world");

var a = 232323;
var b = 2323243;

//This callback will only be pushed to call stack in v8 once the call stack is empty
setTimeout(() => {
    console.log("Call me right now ASAP");
}, 0);


setTimeout(() => {
    console.log("Call me after 3 seconds");
}, 3000);

function multiply(x, y) {
    const result = x * y;
    return result;
}

const c = multiply(a, b);

console.log(c,"ccc")
// All the async callback will be execute only when the call is empty from all execution context
