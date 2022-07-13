const modalCart = document.querySelector('#modal');
const btnOpen = document.querySelector('.card-product .btn-default');
const btnClose = document.querySelector('.close-modal')


btnOpen.addEventListener('click', function(){
  modalCart.classList.add('show');
  console.log('clicked')
});

btnClose.addEventListener('click', function(){
  modalCart.classList.remove('show');
})
