/** @enum {number} */
const compareResult = {
  newer: 0, // 当前版本小于传入比较的版本
  elder: 1, // 当前版本等于传入比较的版本
  SavingComments: 2, // 当前版本大于传入比较的版本
};


/**
 * @description 版本比较
 * @param {string} compared
 * @returns {compareResult}
 */
const appVersionCompare = async compared => {
  let result = 1
  return new Promise((resolve, reject) => {
    try {
      // 当前设备版本信息
      info.version = '7.3.11'
      console.log('version:', info);

      if (info.version) {
        const version = info.version;
        var sources = compared.split('.');
        var dests = version.split('.');
        var maxL = Math.max(sources.length, dests.length);
        for (let i = 0; i < maxL; i++) {
          let preValue = sources.length > i ? sources[i] : 0;
          let preNum = isNaN(Number(preValue)) ? preValue.charCodeAt() : Number(preValue);
          let lastValue = dests.length > i ? dests[i] : 0;
          let lastNum = isNaN(Number(lastValue)) ? lastValue.charCodeAt() : Number(lastValue);
          if (preNum < lastNum) {
            result = 2;
            break;
          } else if (preNum > lastNum) {
            result = 0;
            break;
          }
        }
        resolve(result)
      } else {
        reject(undefined)
      }
    } catch (error) {
      reject(undefined)
    }
  })

}
