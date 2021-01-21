let burger = document.querySelector('.burger');
let showBurgerButton = document.querySelector('.button--burger');
let closeBurgerButton = burger.querySelector('.burger__close');
let other = document.querySelector('.wrapper');
let feedback = document.querySelector('.modal--feedback');
let callback = document.querySelector('.modal--callback');
let showFeedbackButton = document.querySelectorAll('.button--chat');
let showCallbackButton = document.querySelectorAll('.button--call');
let closeFeedbackButton = feedback.querySelector('.button--close');
let closeCallbackButton = callback.querySelector('.button--close');
let main = document.querySelector('main');
let blured = 0;


main.addEventListener('click', function() {
  if (blured === 1) {
    callback.style.display = 'none';
    feedback.style.display = 'none';

    if (window.innerWidth < 1440) {
      burger.style.display = 'none';
    }

    other.classList.remove('blured');
    burger.classList.remove('blured');
    blured = 0;
    }
  }
);

showBurgerButton.addEventListener('click', function() {
  burger.style.display = 'block';
  other.classList.add('blured');
  blured = 1;
  }
);

closeBurgerButton.addEventListener('click', function() {
  burger.style.display = 'none';
  other.classList.remove('blured');
  blured = 0;
  }
);

for (let i = 0; i < showFeedbackButton.length ; i++) {
  showFeedbackButton[i].addEventListener('click', function() {
    feedback.style.display = 'block';
    other.classList.add('blured');
    burger.classList.add('blured');
    blured = 1;
    }
  );
};

closeFeedbackButton.addEventListener('click', function() {
  feedback.style.display = 'none';
  other.classList.remove('blured');
  burger.classList.remove('blured');
  blured = 0;
  }
);

for (let i = 0; i < showCallbackButton.length ; i++) {
  showCallbackButton[i].addEventListener('click', function() {
    callback.style.display = 'block';
    other.classList.add('blured');
    burger.classList.add('blured');
    blured = 1;
    }
  );
};

closeCallbackButton.addEventListener('click', function() {
  callback.style.display = 'none';
  other.classList.remove('blured');
  burger.classList.remove('blured');
  blured = 0;
  }
);
