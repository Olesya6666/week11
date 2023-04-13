const elemBooka = document.getElementById('booka');
const elemBookb = document.getElementById('bookb');
const elemBookc = document.getElementById('bookc');
const elemBookd = document.getElementById('bookd');
const elemResult = document.getElementById('result');


const button = document.querySelector('.card-footer__coupon');
console.log(button);

const bookaPrice = document.querySelector('.booka__price');
const bookbPrice = document.querySelector('.bookb__price');
const bookcPrice = document.querySelector('.bookc__price');
const bookdPrice = document.querySelector('.bookd__price');
const totalPrice = document.querySelector('.total__price');



//totalPrice.textContent = sum;

let booka = bookaPrice.textContent;
console.log(bookaPrice);
console.log(elemBooka);
booka = Number(booka);

let bookb = bookbPrice.textContent;
console.log(bookbPrice);
console.log(elemBookb);
bookb = Number(bookb);


let bookc = bookcPrice.textContent;
console.log(bookcPrice);
bookc = Number(bookc);


let bookd = bookdPrice.textContent;
console.log(bookdPrice);
bookd = Number(bookd);

let result = totalPrice.textContent;
console.log(totalPrice);
result = Number(result);


button.addEventListener('click', () => {
   bookaPrice.textContent = booka * 0.8;
   bookbPrice.textContent = bookb * 0.8;
   bookcPrice.textContent = bookc * 0.8;
   bookdPrice.textContent = bookd * 0.8;
   
   const sum = 
Number.parseInt(booka.innerHTML)+
Number.parseInt(bookb.innerHTML)+
Number.parseInt(bookc.innerHTML)+
Number.parseInt(bookd.innerHTML)

   totalPrice.textContent = sum;

   totalPrice.textContent = result * 0.8;
   button.disabled = true;
});

