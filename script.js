const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}

// sign in 
function verifierFormulaire() {
  let motDePasse = document.getElementById('MotDePasse');
  let email = document.getElementById('mail');

  if (motDePasse.value.length < 8) {
    motDePasse.classList.add('isinvalid');
    motDePasse.classList.remove('isvalid');
   
} else {
    motDePasse.classList.remove('isinvalid');
    motDePasse.classList.add('isvalid');
}

if (mail.value.includes('@') ) {
  mail.classList.add('isvalid')
  mail.classList.remove('isinvalid');

} else {
  mail.classList.add('isinvalid');
  mail.classList.remove('isvalid');

}
}
// Sign Up

function verifierFormulaire() {
  let motDePasse = document.getElementById('MotDePasse1');
  let email = document.getElementById('mail');
  let Prenom = document.getElementById('Prenom');
  let Nom = document.getElementById('Nom');

  if (motDePasse.value.length < 8) {
    motDePasse.classList.add('isinvalid');
    motDePasse.classList.remove('isvalid');
    
   
} else {
    motDePasse.classList.remove('isinvalid');
    motDePasse.classList.add('isvalid');
}

if (mail.value.includes('@') ) {
  mail.classList.add('isvalid')
  mail.classList.remove('isinvalid');

} else {
  mail.classList.add('isinvalid');
  mail.classList.remove('isvalid');

}
if (Prenom.value.length < 3) {
  Prenom.classList.add('isinvalid');
  Prenom.classList.remove('isvalid');
 
} else {
  Prenom.classList.remove('isinvalid');
  Prenom.classList.add('isvalid');
}

if (Nom.value.length < 3) {
  Nom.classList.add('isinvalid');
  Nom.classList.remove('isvalid');
 
} else {
  Nom.classList.remove('isinvalid');
  Nom.classList.add('isvalid');
}

}