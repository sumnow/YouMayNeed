// l 为超出长度
// obj 为字符或者数组，如果为数组，则props为必须，为obj中需要做限制的属性

const overLengthEillpsis = (l, obj, ...props) => {
    let str
    if (typeof obj === 'string') {
        return obj.length > l ? obj.slice(0,l) + '...' : obj
    }
    if(obj instanceof Object && props.length > 0 ) {
        props.forEach(e=>obj[e] = obj[e].slice(0,l) + '...')
    } else {
        throw new Error ('parameter missed')
    }
}

const are = {a: 'asdzxc', b:'zxcasd'}
overLengthEillpsis(3,are,'a','b')