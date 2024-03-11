const parentDiv = document.getElementById("img-product-detail-parent");
const childDivs = document.getElementsByClassName("img-product-detail-child");
const listImage = document.getElementById("list-image")
const bigImageProduct = document.getElementsByClassName('big-image-product')
// const bigImageProductSize = bigImageProduct[0].offsetWidth


for (let i = 0; i < childDivs.length; i++) {
  childDivs[i].addEventListener("click", function() {
    const childIndex = Array.from(childDivs).indexOf(this);
    console.log(bigImageProduct[i].offsetWidth)
    // console.log(childDivs[i].offsetWidth)
    // console.log("Thẻ con thứ:", childIndex + 1);

    // listImage.style.transform = `translateX(${bigImageProductSize * -1 * childIndex}px)`
    listImage.style.transform = `translateX(${bigImageProduct[i].offsetWidth * -1 * childIndex}px)`
  });
}