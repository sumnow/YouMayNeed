// // 大数相加的问题
// function sumString(a, b) {
//     a = '0' + a;
//     b = '0' + b;  //加'0'首先是为了转为字符串，而且两个数相加后可能需要进位，这样保证了和的长度就是a、b中长的那个字符的长度
//     var arrA = a.split(''),  //将字符串转为数组
//         arrB = b.split(''),
//         res = [],  //相加结果组成的数组
//         temp = '',  //相同位数相加的值
//         carry = 0,  //同位数相加结果大于等于10时为1，否则为0
//         distance = a.length - b.length,  //计算两个数字字符串的长度差
//         len = distance > 0 ? a.length : b.length;  //和的长度
//     // 在长度小的那个值前加distance个0，保证两个数相加之前长度是想等的
//     if (distance > 0) {
//         for (let i = 0; i < distance; i++) {
//             arrB.unShift('0');
//         }
//     } else {
//         for (let i = 0; i < distance; i++) {
//             arrA.unShift('0');
//         }
//     }
//     // 现在得到了两个长度一致的数组，需要做的就是把他们想通位数的值相加，大于等于10的要进一
//     // 最终得到一个和组成的数组，将数组转为字符串，去掉前面多余的0就得到了最终的和
//     for (let i = len - 1; i >= 0; i--) {
//         temp = Number(arrA[i]) + Number(arrB[i]) + carry;
//         if (temp >= 10) {
//             carry = 1;
//             res.unshift((temp + '')[1])
//         }
//         else {
//             carry = 0;
//             res.unshift(temp)
//         }
//     }
//     res = res.join('').replace(/^0/, '');
//     console.log(res);
// }



// var obj = { 'a_a': 1, }
// var obj = { 'a_a': 1, 'b_b': { 'c_c': [{ 'd_d': 2 }, { 'e_e': { 'f_f': 3 } }] } }
// var obj2 = {}
// const obj1 = {}
// const changeKey = function (str) {
//     const reg = /\_(\w)/;
//     console.log(str)
//     const str1 = reg.test(str) ? str.replace(reg, str.match(reg)[1].toUpperCase()) : str
//     return str1
// }

// // 判断arr是否为一个数组，返回一个bool值
// function isArray(arr) {
//     return Object.prototype.toString.call(arr) === '[object Array]';
// }
// // 深度克隆
// function deepClone(obj) {
//     if (typeof obj !== "object" && typeof obj !== 'function') {
//         return obj;        //原始类型直接返回
//     }
//     var o = isArray(obj) ? [] : {};
//     for (i in obj) {
//         // if (obj.hasOwnProperty(i)) {
//             o[changeKey(i)] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
//         // }
//     }
//     return o;
// }
// console.log(JSON.stringify(deepClone(obj)))
// function maps(obj, pre, obj1) {
//     // console.log(123, pre)
//     if (obj instanceof Array) {
//         console.log(obj1)
//         // obj1[pre] = []
//         obj.forEach((e, i) => {
//             maps(e, pre + `['${i}']`)
//         })
//     } else {
//         var arr = Object.entries(obj)
//         for (let i = 0; i < arr.length; i++) {
//             // obj1[changeKey(arr[i][0])] = arr[i][1]
//             pre = `${pre}['${changeKey(arr[i][0])}']`
//             console.log(312, pre)

//             // obj1[pre] = arr[i][1]
//             console.log(obj1)

//             if (typeof arr[i][1] == 'number') {
//                 eval(`obj1${pre} = arr[i][1]`.replace(/\"/g, ""))
//                 pre = ''
//             } else {
//                 maps(arr[i][1], pre, obj1)
//             }
//         }
//     }
// }

// maps(obj, '', obj1)


function mypromise(fn) {
    this.status = 'pending';
    this.value = '';
    this.stack = [];
    const self = this;
    this.then = function (fnl) {
        console.log(1,self.value)
        if (self.status == 'onfulfilled') {
            self.stack.forEach(e => {
                e(self.value)
            })
        } else {
            self.stack.push(fnl)
        }
        // fnl(self.value)
        return self
    }
    this.resolve = function (e) {
        console.log(e)
        self.status = 'onfulfilled'
        self.value = e;
    }
    fn(this.resolve);
}

var p = new mypromise((res) => {
    setTimeout(() => {
        res('hello')
        console.log('12')
    }, 1000);
})

p.then(e => {
    console.log(e + ' world')
}).then(e => {
    console.log(e + '!')
})

