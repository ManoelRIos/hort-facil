/* HOME */

//swipper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  keyboard: true,
});

function toggleNav() {
  const nav = document.querySelector(".cat");
  const btnOpenNav = document.querySelector(".nav-bar .icon-nav");  
  const btnCloseNav = document.querySelector(".cat .btnCloseNav");

  btnOpenNav.addEventListener("click", function () {        
    nav.classList.add("active");     
  });

  btnCloseNav.addEventListener("click", function () {
    nav.classList.remove("active");
  })
  

}

function openCart() {
  const modalCart = document.querySelector("#modal");
  const btnOpen = document.querySelector(".nav-bar .icon-cart");
  const btnClose = document.querySelector(".close-modal");
  /* const clickOut = document.querySelector("#modal") */

  btnOpen.addEventListener("click", function () {
    modalCart.classList.add("show");    
  });

  btnClose.addEventListener("click", function () {
    modalCart.classList.remove("show");
  });

  /* AO CLICAR FORA DO  MODAL */
/*   clickOut.addEventListener("click", function () {
    modalCart.classList.remove("show");
    console.log("clicado")
  }) */
}

toggleNav();
openCart();
