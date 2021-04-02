const imgList = document.querySelectorAll('img');
for(let i=0; i<imgList.length; i++){
    imgList[i].addEventListener('click',function(){
        console.log(this.src);
        window.open(this.src,
            'Bonsais','resizable=yes,width=500px,height=500px');
    })
}
