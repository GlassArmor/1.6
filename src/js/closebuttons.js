let burger = document.querySelector('.burger');
let showBurgerButton = document.querySelector('.button--burger');
let closeBurgerButton = burger.querySelector('.burger__close');
let feedback = document.querySelector('.modal--feedback');
let callback = document.querySelector('.modal--callback');
let showFeedbackButton = document.querySelectorAll('.button--chat');
let showCallbackButton = document.querySelectorAll('.button--call');
let closeFeedbackButton = feedback.querySelector('.button--close');
let closeCallbackButton = callback.querySelector('.button--close');
let blurScreen = document.querySelector('.blur');
let blured = 0;
let burgerShown = 0;
let modalShown = 0;
let other = document.querySelector('.wrapper');

console.log(burger.clientHeight);

function Blur() {
  if (blured === 0) {
    blurScreen.style.display = 'block';
    blurScreen.style.width = document.body.clientWidth.toString()+'px';
    blurScreen.style.minHeight = '100vh';
    blurScreen.style.height = '805px';
    blurScreen.style.overflow = 'hidden';
    blured = 1;

    other.style.minHeight = '100vh';
    other.style.height = '805px';
    other.style.overflow = 'hidden';

    feedback.style.minHeight = '100vh';
    feedback.style.height = '805px';

    callback.style.minHeight = '100vh';
    callback.style.height = '805px';

    burger.style.minHeight = '100vh';
    burger.style.height = '805px';
    burger.style.overflow = 'hidden';

  } else if (blured === 1) {
    blurScreen.style.display = 'none';
    other.style.height = 'auto';
    burger.style.height = document.body.clientHeight.toString()+'px';
    blured = 0;

    burgerShown = 0;
  }
};

blurScreen.addEventListener('click', function() {
  if (blured === 1) {
    callback.style.display = 'none';
    feedback.style.display = 'none';

    if (window.innerWidth >= 1440) {
      blurScreen.style.zIndex = 9;
    }

    if (window.innerWidth < 1440) {
      burger.style.display = 'none';
    }
    Blur();
    }
  }
);

showBurgerButton.addEventListener('click', function() {
  burger.style.display = 'block';
  burgerShown = 1;
  Blur();
  }
);

closeBurgerButton.addEventListener('click', function() {
  burger.style.display = 'none';
  Blur();
  }
);

for (let i = 0; i < showFeedbackButton.length ; i++) {
  showFeedbackButton[i].addEventListener('click', function() {
    if (window.innerWidth >= 1440) {
      blurScreen.style.zIndex = 11;
    }

    if (burgerShown === 0) {
      Blur();
    }

    feedback.style.display = 'block';

    }
  );
};

closeFeedbackButton.addEventListener('click', function() {
  feedback.style.display = 'none';

  if (window.innerWidth >= 1440) {
    blurScreen.style.zIndex = 9;
  }

  if (burgerShown === 0) {
    Blur();
  }
  }
);

for (let i = 0; i < showCallbackButton.length ; i++) {
  showCallbackButton[i].addEventListener('click', function() {
    if (window.innerWidth >= 1440) {
      blurScreen.style.zIndex = 11;
    }

    if (burgerShown === 0) {
      Blur();
    }

    callback.style.display = 'block';
    }
  );
};

closeCallbackButton.addEventListener('click', function() {
  callback.style.display = 'none';

  if (window.innerWidth >= 1440) {
    blurScreen.style.zIndex = 9;
  }

  if (burgerShown === 0) {
    Blur();
  }
  }
);
