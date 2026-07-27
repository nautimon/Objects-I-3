// Write your code below
function removeValue(obj, key) {
    delete obj[key];
}

var obj = {
    "key": "value"
};

removeValue(obj, "key");

console.log(obj["key"]);
