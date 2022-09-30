const card = document.querySelector('.card');
const tks = document.querySelector('.tks');
const cardSubmit = document.querySelector('.card__submit');
const tksBtn = document.querySelector('.tks__btn');
const rating = document.querySelector('.rating');
const rates = document.querySelectorAll('.card__rate--btn');

cardSubmit.addEventListener('click', ()=>{
  tks.classList.toggle('hidden');
  card.classList.toggle('hidden');
})

tksBtn.addEventListener('click', ()=>{
  tks.classList.toggle('hidden');
  card.classList.toggle('hidden');
})

rates.forEach(rate=>{
  rate.addEventListener('click',()=>{
    rating.innerHTML = rate.innerHTML;
  })
})