// 首字母大写
function first2UpperCase(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}
// 循环 await
async function forEachSync(list, func){
  const length = list.length;
  let i = 0;
  while(i < length){
    await func(list[i], i);
    i++;
  }
}
module.exports = {
  first2UpperCase,
  forEachSync
}