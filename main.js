var carrousel = document.getElementById('carrousel')
carrousel.dataset.rotatey = "255"
var touchClientY
document.body.addEventListener('wheel', e => {
    rotateSlider(e.wheelDelta, 3)
})
document.body.addEventListener('touchstart', e => {
    touchClientY = e.changedTouches[0].clientY
})
document.body.addEventListener('touchmove', e => {
    let scroll = e.changedTouches[0].clientY - touchClientY
    rotateSlider(scroll, 3)
    touchClientY = e.changedTouches[0].clientY
})
function rotateSlider(value, offset)
{
    let rotateY = parseInt(carrousel.dataset.rotatey)
    if(value > 0)
    {
        rotateY -= offset
    }
    else if(value < 0)
    {
        rotateY += offset
    }
    carrousel.dataset.rotatey = rotateY
    carrousel.style.transform = `rotateY(${rotateY}deg)`
}