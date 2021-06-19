let leftarrow = document.querySelector('.arrow_left')
let righttarrow = document.querySelector('.arrow_right')
let img = document.querySelectorAll('.img-container')
let index = 0
let auto = true
let interval
let sec = 2000

leftarrow.addEventListener('click', e => {
    previous()
    if(auto){
        clearInterval(interval)
        interval = setInterval(next,sec)
    }
});
righttarrow.addEventListener('click', e => {
    next()
    if(auto){
        clearInterval(interval)
        interval = setInterval(next,sec)
    }
})


if(auto){
    interval = setInterval(next,sec)
}

function previous(){
    img[index].classList.remove('current')
    if(index == 0){
        index = img.length
    }
    index--
    img[index].classList.add('current')
}

function next(){
    img[index].classList.remove('current')
    if(index == img.length - 1){
        index = 0
        img[index].classList.add('current')
    }else{
        index++
        img[index].classList.add('current')
    }
}

