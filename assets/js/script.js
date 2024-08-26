// EVENTS
document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', clickEvent)
})

// FUNCTIONS
function clickEvent(event) {
    document.querySelector('.menu a.active').classList.remove('active')
    event.target.classList.add('active')
}

//MOBILE
window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        } else{
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    })
};