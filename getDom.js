export default  {
     getId:function(id){
       return document.querySelector(id);
     },
     getTag:function(tag){
       return document.querySelector(tag);
     },
     getTags:function(tags){
       return document.querySelectorAll(tags);
     },
     getAttr:function(attr){
       return document.querySelector(attr);
     },
     getAttrs:function(attrs){
       return document.querySelectorAll(attrs);
     },

     toFor:function (selectImg,index1,selectPic,mark,model,flows1,index2,mb,size){
      for(var i = 0;i<selectImg.length;i++){
          selectImg[i].src = '';
        }
        selectImg[index1].src = selectPic;
        mark.style.display = 'block';
        model.removeAttribute('id');
        for (var i = 0; i < flows1.length; i++) {
            flows1[i].removeAttribute('id');
          }
          flows1[index2].setAttribute('id', 'comm_color');
          mb.innerHTML = size;
      },

      toForAll:function(selectImg,index,selectPic,mark,model,mb,size){
        for (var i = 0; i < selectImg.length; i++) {
          selectImg[i].src = '';
        }
        selectImg[index].src = selectPic;
        mark.style.display = 'block';
        model.removeAttribute('id');
        mb.innerHTML = size;
      },

}

