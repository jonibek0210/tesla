let salon__photo = document.querySelector('.salon__photo')
let items = document.querySelectorAll('.item')

for (let item of items) {
   item.onclick = () => {
      if (item.getAttribute('id') === 'black') salon__photo.setAttribute('src', './img/salon-black.svg')
      if (item.getAttribute('id') === 'white') salon__photo.setAttribute('src', './img/salon-white.svg')
      if (item.getAttribute('id') === 'beige') salon__photo.setAttribute('src', './img/salon-beige.svg')
   }
}