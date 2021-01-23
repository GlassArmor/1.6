let showButtonBrands = document.querySelector('.cards__showmore--brands');
let containerBrands = document.querySelector('.brands');
let statusBrands = 0;

showButtonBrands.addEventListener('click', function() {
  if ( statusBrands === 0 ) {

    containerBrands.style.height = "auto";
    showButtonBrands.textContent = 'Скрыть';
    showButtonBrands.classList.add('cards__showmore--reversed');
    statusBrands = 1;
    resizeModal()
  } else {
    containerBrands.style.height = "205px";
    showButtonBrands.textContent = 'Показать все';
    showButtonBrands.classList.remove('cards__showmore--reversed');
    statusBrands = 0;
    resizeModal()
  }
});

let showButtonTechs = document.querySelector('.cards__showmore--techs');
let containerTechs = document.querySelector('.techs');
let statusTechs = 0;

showButtonTechs.addEventListener('click', function() {
  if ( statusTechs === 0 ) {
    containerTechs.style.height = "auto";
    showButtonTechs.textContent = 'Скрыть';
    showButtonTechs.classList.add('cards__showmore--reversed');
    statusTechs = 1;
    resizeModal()
  } else {
    containerTechs.style.height = "205px";
    showButtonTechs.textContent = 'Показать все';
    showButtonTechs.classList.remove('cards__showmore--reversed');
    statusTechs = 0;
    resizeModal()
  }
});

let burger = document.querySelector('.burger');
let feedback = document.querySelector('.modal--feedback');
let callback = document.querySelector('.modal--callback');
resizeModal();
window.addEventListener('resize', function(){
  resizeModal();
});

function resizeModal() {
  if ( window.innerWidth >= 768) {
    burger.style.height = document.body.clientHeight.toString()+'px';
    feedback.style.height = document.body.clientHeight.toString()+'px';
    callback.style.height = document.body.clientHeight.toString()+'px';
    if ( window.innerWidth > 1439 ) {
      burger.style.display = 'block';
    } else {
      burger.style.display = 'none'
    }
  }
};
