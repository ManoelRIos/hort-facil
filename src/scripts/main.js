/* HOME */
function login(){
  /* Alterar para false ou true para ver tela de usuário logado */
  var isLogged = true;
  const loginInfo = document.querySelector(".nav-bar .login-info");  
  const btnLogin = document.querySelector(".nav-bar .btn-login")
  const popupUser = document.querySelector(".nav-bar .popup-user");
  const btnUserDropdown = document.querySelector(".dropdown-user")

  if(isLogged){
    loginInfo.classList.add("logged")    
    btnLogin.classList.add("logged")   

    const endAccount = document.querySelector("#endAccount")
    var popupOpen = false

    btnUserDropdown.addEventListener("click", () => {      
      popupOpen = !popupOpen
      console.log("clicado")
      popupOpen ?  popupUser.classList.add("logged") :  popupUser.classList.remove("logged")
    })

    endAccount.addEventListener("click", () => {
      loginInfo.classList.remove("logged")    
      btnLogin.classList.remove("logged")   
      isLogged = false;
    })    
  }  
}

function toggleNav() {
  const nav = document.querySelector(".cat");
  const btnOpenNav = document.querySelector(".nav-bar .icon-nav");  
  const btnCloseNav = document.querySelector(".cat .btnCloseNav");
  const menu = document.querySelector(".nav-bar .menu");

  btnOpenNav.addEventListener("click", function () {        
    nav.classList.add("active");   
    menu.classList.add("active")  
  });

  btnCloseNav.addEventListener("click", function () {
    nav.classList.remove("active");
    menu.classList.remove("active")  
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

}

login();
toggleNav();
openCart();


