let fName = localStorage.getItem('fName');
console.log(fName);
// =======================================================================
const section = document.querySelector('.section');
const wrapper = document.querySelector('.wrapper');
const userName = document.querySelector('.header__nav-user');
const headerBtn = document.querySelector('.header__nav-btn');

if (fName) {
  wrapper.style.display = 'block'
  section.style.opacity = '0'
} else {
  wrapper.style.display = 'none'
  section.style.opacity = '1'
}

headerBtn.addEventListener('click', () => {
  let fName = '';
  localStorage.setItem("fName", fName)
  location.reload()
})

// =======================================================================
userName.textContent = fName;

const foodsArr = [
  {
    title: `Palov`,
    price: 25000,
    img: `osh`,
    category: 'quyuq'
  },
  {
    title: `Sho'rva`,
    price: 12000,
    img: `shorva`,
    category: 'suyuq'
  },
  {
    title: `Dimlama`,
    price: 33000,
    img: `dimlama`,
    category: 'quyuq'
  },
  {
    title: `Olcha kompot`,
    price: 9000,
    img: `olcha`,
    category: 'ichimlik'
  },
  {
    title: `Chuchvara`,
    price: 27000,
    img: `chuchvara`,
    category: 'suyuq'
  },
  {
    title: `Moxora`,
    price: 24000,
    img: `moxora`,
    category: 'suyuq'
  },
  {
    title: `Makaron`,
    price: 17000,
    img: `makaron`,
    category: 'quyuq'
  },
  {
    title: `Olma kompot`,
    price: 9000,
    img: `olma`,
    category: 'ichimlik'
  },
  {
    title: `Lag'mon`,
    price: 21000,
    img: `lagmon`,
    category: 'suyuq'
  },
  {
    title: `Moshkichiri`,
    price: 23000,
    img: `moshkichiri`,
    category: 'quyuq'
  },
  {
    title: `Coca-cola`,
    price: 8000,
    img: `kola`,
    category: 'ichimlik'
  },
  {
    title: `Shashlik`,
    price: 11000,
    img: `shashlik`,
    category: 'quyuq'
  },
  {
    title: `Do'lma`,
    price: 29000,
    img: `dolma`,
    category: 'quyuq'
  },
  {
    title: `Fanta`,
    price: 8000,
    img: `fanta`,
    category: 'ichimlik'
  },
  {
    title: `Manti`,
    price: 30000,
    img: `manti`,
    category: 'quyuq'
  },
  {
    title: `Go'ja`,
    price: 18000,
    img: `goja`,
    category: 'suyuq'
  },
]

const box = document.querySelector('.main__content-box');

let foods = foodsArr.slice()


function createByArr (array) {
  array.forEach(e => {
    let cardTitle = e.title;
    let cardPrice = e.price
    let cardImg = e.img
    let card = createCard(cardTitle, cardPrice, cardImg)
    box.append(card)
  })
}

function createCard (title, price, img) {
  const card = document.createElement('div');
  card.classList.add('card')

  const imgBox = document.createElement('div');
  imgBox.classList.add('card__imgBox')

  const cardImg = document.createElement('img');
  cardImg.setAttribute('src', `images/${img}.jpg`)
  cardImg.classList.add('card__imgBox-img')

  imgBox.append(cardImg)

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card__title')
  cardTitle.textContent = title

  const cardPrice = document.createElement('p');
  cardPrice.classList.add('card__price')
  cardPrice.textContent = `${price} so'm`


  card.append(imgBox);
  card.append(cardTitle);
  card.append(cardPrice);

  return card
}


createByArr(foods)
// =======================================================================
const mainBtns = document.querySelectorAll('.main__category');


mainBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    box.innerHTML = ''
    if (btn.classList.contains('hammasi')) {
      foods = foodsArr.slice()
      createByArr(foods)
    } else if (btn.classList.contains('quyuq')) {
      foods = foodsArr.filter(food => food.category === 'quyuq')
      createByArr(foods)
    } else if (btn.classList.contains('suyuq')) {
      foods = foodsArr.filter(food => food.category === 'suyuq')
      createByArr(foods)
    } else if (btn.classList.contains('ichimliklar')) {
      foods = foodsArr.filter(food => food.category === 'ichimlik')
      createByArr(foods)
    }
  })
})