let stars=document.getElementById('stars1')
let moon=document.getElementById('moon')
let mountains3=document.getElementById('mountains3')
let mountains4=document.getElementById('mountains4')
let river=document.getElementById('river5')
let boat=document.getElementById('boat6')
let noval=document.querySelector('.noval')

window.onscroll=()=>{
let value=scrollY
stars.style.left=value + 'px'
moon.style.top=value * 3+ 'px'
mountains3.style.top=value * 2 + 'px'
mountains4.style.top=value * 1.5+ 'px'
river.style.top=value + 'px'
boat.style.top=value + 'px'
boat.style.left=value * 3+ 'px'
noval.style.fontSize=value + 'px'


if(scrollY >=67){
    noval.style.fontSize=67 + 'px'
    noval.style.position='fixed'
}if(scrollY >=478){
    noval.style.display='none'
}else{
    noval.style.display='block'
}
if(scrollY >= 127){
document.querySelector('.main').style.background= 'linear-gradient(#376281,#10001f)';
}else{
    document.querySelector('.main').style.background= 'linear-gradient(#200016,#10001f)';
}


}

