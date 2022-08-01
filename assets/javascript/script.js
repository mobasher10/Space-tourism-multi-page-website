const header = document.querySelector('.header');
const humberger = document.querySelector('.humberger-menu');
const destinationBtns = document.querySelector('.destinations-btns-container');
const destinationBtn = document.querySelectorAll('.destination-btn');
const destinationContent = document.querySelectorAll('.destination-content');
const dots = document.querySelector('.dots');
const dotsDot = document.querySelectorAll('.dots-dot');
const destinatipnImage = document.querySelectorAll('.destination-img');

humberger.addEventListener('click', () => {
  header.classList.toggle('nav-active');
  return;
});

if (destinationBtns) {
  destinationBtns.addEventListener('click', e => {
    const clicked = e.target.closest('.destination-btn');
    if (!clicked) return;
    destinationBtn.forEach(btn => {
      btn.classList.remove('destination-btn-active');
      clicked.classList.add('destination-btn-active');
    });

    destinationContent.forEach(d => {
      if (d.classList.contains('destination-content-active')) {
        d.classList.remove('destination-content-active');
      }
      document
        .querySelector(`.destination-content-${clicked.dataset.tab}`)
        .classList.add('destination-content-active');

      destinatipnImage.forEach(img => {
        img.classList.remove('destination-img-active');
      });
      document
        .querySelector(`.destination-img-${clicked.dataset.tab}`)
        .classList.add('destination-img-active');
    });
  });
}

dots.addEventListener('click', e => {
  const clickedDot = e.target.closest('.dots-dot');
  if (!clickedDot) return;
  dotsDot.forEach(dot => {
    dot.classList.remove('dot-active');
    clickedDot.classList.add('dot-active');
  });
  const dotsContent = document.querySelectorAll('.dots-content');
  dotsContent.forEach(dContetn => {
    dContetn.classList.remove('dots-content-active');
    document
      .querySelector(`.dots-content-${clickedDot.dataset.btn}`)
      .classList.add('dots-content-active');
  });
  const crewImages = document.querySelectorAll('.crew-img');
  crewImages.forEach(crewImg => {
    crewImg.classList.remove('crew-img-active');
    document
      .querySelector(`.crew-img-${clickedDot.dataset.btn}`)
      .classList.add('crew-img-active');
  });
});
