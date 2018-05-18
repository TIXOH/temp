var portfolioItems = document.querySelectorAll(".list-item");
var selectionAll = document.querySelector(".portfolio-all");
var selectionPhoto = document.querySelector(".portfolio-photo");
var selectionLogo = document.querySelector(".portfolio-logo");
var selectionWebdesign = document.querySelector(".portfolio-webdesign");
var navigationItem = document.querySelectorAll(".navigation-item");


selectionAll.addEventListener("click", function() {
    setActive(this);
    showAll();
});
selectionPhoto.addEventListener("click", function(){
    setActive(this);
    showSelectedList("photo");
});
selectionLogo.addEventListener("click", function(){
    setActive(this);
    showSelectedList("logo");
});
selectionWebdesign.addEventListener("click", function(){
    setActive(this);
    showSelectedList("webdesign");
});


function clearList() {
    for (var i = 0; i < portfolioItems.length; i++) {
        if (!(portfolioItems[i].classList.contains("hide"))) {
            portfolioItems[i].classList.add("hide");
        }
    }
}

function showSelectedList(selection) {
    var selected = document.querySelectorAll("."+selection);
    clearList();
    for(var j = 0; j < selected.length; j++) {
        selected[j].classList.toggle("hide");
    }
}

function showAll() {
    clearList();
    for (var i = 0; i < portfolioItems.length; i++) {
        portfolioItems[i].classList.toggle("hide");
    }
}

function setActive(target) {
    for (var i = 0; i < navigationItem.length; i++) {
        navigationItem[i].classList.remove("portfolio-active");
    }
    target.classList.add("portfolio-active");
}



var modal = document.querySelector("#myModal");
var listItemImg = document.querySelectorAll('.img');
var modalImg = document.querySelector("#img");
var close = document.querySelector(".close");

for (var i = 0; i < listItemImg.length; i++) {
  listItemImg[i].addEventListener("click", function() {
    modal.classList.toggle("hide");                         
    modalImg.src=this.src;      
                               });
}

close.addEventListener("click", function() {
   modal.classList.toggle("hide"); 
});