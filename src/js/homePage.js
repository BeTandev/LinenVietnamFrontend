const toggleTopMenu = document.getElementById("ct-toggle-top-menu");
const topMenu = document.getElementById("ct-top-menu");

document.addEventListener("click", (e) => {
  if (toggleTopMenu.contains(e.target)) {
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("ct-topmenu-expanded");
  }
  else{
    if(topMenu.classList.contains("ct-topmenu-expanded")){
        topMenu.classList.remove("ct-topmenu-expanded")
        topMenu.classList.add("hidden")
    }
  }
});


const listImages = document.querySelector('.list-images')
const imgs = document.querySelectorAll('.img-div')
const btnLeft = document.getElementById('btn-left')
const btnRight = document.getElementById('btn-right')
let current = 0 

const handleChangeSLide = () => {
  if (current == imgs.length - 1){
    current == 0
    // let width = imgs[0].offsetWidth
    let width = 1000
    listImages.style.transform = `translateX(0px)`
  }else{
    current++
    // let width = imgs[0].offsetWidth
    let width = 500
    listImages.style.transform = `translateX(${width * -1 * current}px)`
  }
}
btnRight.addEventListener('click', () => {
  clearInterval(handleChangeSLide)
  handleChangeSLide()
  handleEventChangeSlide = setInterval(() => {handleChangeSLide}, 4000)
})
btnLeft.addEventListener('click', () => {
  clearInterval(handleChangeSLide)
  if (current == 0){
    current == length - 1
    // let width = imgs[0].offsetWidth
    let width = 500
    listImages.style.transform = `translateX(${width * -1 * current}px)`
  }else{
    current--
    // let width = imgs[0].offsetWidth
    let width = 500
    listImages.style.transform = `translateX(${width * -1 * current}px)`
  }
  handleEventChangeSlide = setInterval(() => {handleChangeSLide}, 4000)
})
let handleEventChangeSlide = setInterval(() => {handleChangeSLide}, 4000)