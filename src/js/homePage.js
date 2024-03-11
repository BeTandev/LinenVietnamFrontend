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

const searchIcon = document.getElementById('search-icon')
const searchSection = document.getElementById('search-section')
const closeSearchIcon = document.getElementById('close-search-icon')

searchIcon.addEventListener("click", () => {
  searchSection.classList.add('block')
  searchSection.classList.remove('hidden')
})
closeSearchIcon.addEventListener("click", () => {
  searchSection.classList.add('hidden')
  searchSection.classList.remove('block')
})


// Xử lí thanh trượt giá
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

