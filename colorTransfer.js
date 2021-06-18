
/**
 *
 * @description  进制转化
 * @param {String} num
 * @param {number} str
 * @param {number} str
 * @returns {String}
 * @example
 * radixConvert(255,10,16) // ff
 */
const radixConvert = (num, fromRadix, toRadix) => parseInt(num, fromRadix).toString(toRadix);


/**
 * @description 颜色转换
 * @param {String} str 123,123,123
 * @param {String} str 0xafe0e1
 * @param {String} str afe0e1
 */
function colorTransfer(str) {
  if (str) {
    if (/^\d{1,3},\d{1,3},\d{1,3}$/.test(str)) {
      const _arr = str.split(',')
      return _arr.map(e => radixConvert(e, 10, 16)).join('')
    } else {
      const _arr = []
      let _temp = ''
      Array.from(str).forEach((e, i) => {
        if (i & 1) {
          _temp += e
          _arr.push(_temp)
          _temp = ''
        } else {
          _temp = e
        }
      })
      return _arr.map(e => radixConvert(e, 16, 10)).join(',')
    }
  } else {
    return ' '
  }
}
