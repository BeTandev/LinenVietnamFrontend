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