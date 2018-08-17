// 网易云封面下载
// 2018-08-17
// 仅供学习使用

function src(name) {
    var a = document.createElement('a');
    const le = document.querySelector('.u-cover-dj img') ? document.querySelector('.u-cover-dj img').src : document.querySelector('iframe').contentWindow.document.querySelector('.u-cover-dj img').src
    imgSrc = le.slice(0, le.indexOf('?'))
    a.href = imgSrc
    a.download = name
    a.click()
    console.log(imgSrc)
}