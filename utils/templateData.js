const { first2UpperCase } = require("./index");

function path2FunctionName(path) {
    return path
        .replace(':', 'By/')
        .split("/")
        .map((str, idx) => (idx === 1 ? str : first2UpperCase(str)))
        .join("");
}



module.exports = {
  path2FunctionName,
};
