// 翻译狗网站下载
// http://www.pdfdo.com/image-to-pdf.aspx
// 注意事项
// 翻译狗的pdf为懒加载，所以需要你拉到最底下，先加载所有pdf，然后再执行方法。
// 2018-06-06
// 仅供学习使用

function downLoadImage(canvas, name) {
    var a = document.createElement("a");
    a.href = canvas.toDataURL();
    a.download = name;
    a.click();
}
Array.from(document.querySelectorAll('canvas')).forEach(e => downLoadImage(e, e.id))
