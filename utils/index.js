/**
 * 获取指定范围内的随机数
 * @param {number} start 开始的数
 * @param {number} end   结束的数
 */
 function getRandomNumber(start, end) {
 return Math.floor(Math.random() * (end - start) + start);
}

/**
 * 把一个数组变成多个数组
 * @param {array}  array            源数据
 * @param {number} subGroupLength   一组数据有多个
 * @copyFrom https://segmentfault.com/q/1010000004921251
 */
function groupBy(array, subGroupLength) {
 var index = 0
 var newArray = []
 while (index < array.length) {
   newArray.push(array.slice(index, (index += subGroupLength)))
 }
 return newArray
}

module.exports ={ 
 getRandomNumber,
 groupBy,
}