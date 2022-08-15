function toggleDropdown() {
  const dropdown = document.querySelector(".order-status");
  const btnToggle = document.querySelector(".dropdown-info"); 
  const icon = document.querySelector(".dropdown-icon"); 
  var isOpen = false;

  btnToggle.addEventListener("click", () => {      
    console.log("Clicado")  
    isOpen = !isOpen;
    if(isOpen) {
      dropdown.classList.remove("open");
      icon.classList.remove("open");
    }
    if(!isOpen) {
      dropdown.classList.add("open");
      icon.classList.add("open");
    }
    /* isOpen ? dropdown.classList.remove("open") : dropdown.classList.add("open");     */          
  });
}

toggleDropdown();