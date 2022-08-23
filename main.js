const icon = document.querySelector('i')
const box = document.querySelector('.box')
const btnY = document.getElementById('yes')
const btnN = document.getElementById('no')
const audio = document.querySelector('audio')
const audioErro = document.getElementById('erro')
console.log(btnY)
document.addEventListener( 'click', e => {
    e.target == btnY ? showIcon() : replaceBox()
}
)

function showIcon(){
    box.classList.add('hide')
    icon.classList.remove('hide')
    icon.classList.add('show')
    audio.play()
    setTimeout(() => {
        audio.pause()
        icon.classList.add('fix')
        icon.classList.remove('show')
    }, 10000);
    
}

function replaceBox(){
    audioErro.currentTime = 1
    audioErro.play()

    let width = parseFloat(window.getComputedStyle(box).width) 
    let height = parseFloat(window.getComputedStyle(box).height)

    let top = (window.innerHeight - height - 25) * Math.random()
    let left = (window.innerWidth - width - 25) * Math.random()

    console.log(top, left)

    box.style.top = top + 'px'
    box.style.left = left + 'px'
    

}