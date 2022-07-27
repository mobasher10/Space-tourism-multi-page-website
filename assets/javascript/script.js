const header = document.querySelector('.header');
const humberger = document.querySelector('.humberger-menu');
const destinationBtns = document.querySelector('.destinations-btns-container');
const destinationBtn = document.querySelectorAll('.destination-btn');
const destinationContent = document.querySelectorAll('.destination-content');

humberger.addEventListener('click', () => {
  header.classList.toggle('nav-active');
});

destinationBtns.addEventListener('click', e => {
  const clicked = e.target.closest('.destination-btn');
  // console.log(clicked);

  if (!clicked) return;
  destinationBtn.forEach(btn => {
    // if (btn.classList.contains('destination-btn-active')) {
    //   btn.classList.remove('destination-btn-active');
    // }
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
  });
});
