// // GET

// const BASE_URL = 'http://localhost:3000';

// function fetchQuotes() {
//   return fetch(`${BASE_URL}/quotes`)
//     .then(response => response.json())
//     .then(console.log);
// }

// fetchQuotes();
//////////////////////async version/////////////////////////
// const BASE_URL = 'http://localhost:3000';
// async function fetchQuotes() {
//   try {
//     const res = await fetch(`${BASE_URL}/quotes`);
//     const quotes = await res.json();
//     return quotes;
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchQuotes().then(console.log);

// const BASE_URL = 'http://localhost:3000';

// function fetchQuoteById(id) {
//   return fetch(`${BASE_URL}/quotes/${id}`)
//     .then(response => response.json())
//     .then(console.log);
// }

// fetchQuoteById(15);

//////////////////////async version/////////////////////////
// const BASE_URL = 'http://localhost:3000';
// async function fetchQuoteById(id) {
//   try {
//     const res = await fetch(`${BASE_URL}/quotes/${id}`);
//     const quotes = await res.json();
//     return quotes;
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchQuoteById(15).then(console.log);

// // POST

// const BASE_URL = 'http://localhost:3000';

// // при методі POST і всіх інших окрім GET, потрібно передати опції,
// // щоби уточнити, який метод фетчу нас цікавить, бо за замовчуванням
// // у фетчі стоїть мутод GET(тому ми його при GET - запитах не ставимо)

// const newQuote = {
//   quote: 'Співаючи ідуть дівчата',
//   translate: 'Плугатарі з плугами йдуть',
// };

// const newQuote2 = {
//   quote: 'Не думанно не гадано забігла в глухомань',
//   translate: 'Де сосни пахнуть ладаном в кадильницяях світань',
// };

// function addQuote(quote) {
//   const options = {
//     method: 'POST',
//     // також, нам потрібно передати хедер із контент-тайпом,
//     // в якому вказати бекенду, який тип контенту ми передаємо
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // ну власне, сам об'єкт, яки ми передаємо у вигляді BODY в форматі строки
//     body: JSON.stringify(quote),
//   };

//   return fetch(`${BASE_URL}/quotes`, options).then(response => response.json());
// }

// addQuote(newQuote).then(r => console.log(r));
// addQuote(newQuote2).then(r => console.log(r));

//////////////////////async version/////////////////////////

// const BASE_URL = 'http://localhost:3000';

// const newQuote2 = {
//   quote: 'Не думанно не гадано забігла в АСИНХРОННУ глухомань',
//   translate: 'Де сосни пахнуть ладаном в АСИНХРОННИХ кадильницяях світань',
// };

// async function addQuote(quote) {
//   const options = {
//     method: 'POST',
//     // також, нам потрібно передати хедер із контент-тайпом,
//     // в якому вказати бекенду, який тип контенту ми передаємо
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // ну власне, сам об'єкт, яки ми передаємо у вигляді BODY в форматі строки
//     body: JSON.stringify(quote),
//   };
//   // ми можемо відловлювати помилки тут, але швидше за все, більш доцільно буде хз відловлювати у зовнішньому коді
//   // тому тут можемо  try...catch забрати

//   const res = await fetch(`${BASE_URL}/quotes`, options);
//   const addedQuote = await res.json();
//   return addedQuote;
// }

// // наприклад до цієї строки після then ми можемо додати catch, за таким же принципом ми можемо використати try...catch у зовнішньому коді(але try...catch ми можемо використовувати лише всередині функції, а якщо ми хочемо зачейнитись до результату асинхронної функції у зовнішньому коді - тоді використовуємо then...catch)
// addQuote(newQuote2).then(r => console.log(r));

// // PUT & PATCH
// // PUT бере об'єкт із заданим айдішником і повністю замінює його
// // PATCH оновлює конкретні влвстивості
// // put працює швидше, ніж patch, тому що повністю замінити об'єкт простіше, ніж оновлювати його

// const BASE_URL = 'http://localhost:3000';

// function updateQuote(update, quoteId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/quotes/${quoteId}`, options).then(res => res.json());
// }

// updateQuote({ translate: 'there were dances in the village' }, 17).then(console.log);

//////////////////////async version/////////////////////////
// const BASE_URL = 'http://localhost:3000';

// async function updateQuote(update, quoteId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   const res = await fetch(`${BASE_URL}/quotes/${quoteId}`, options);
//   const updatedQuote = await res.json();
//   return updatedQuote;
// }

// updateQuote(
//   { translate: 'Де сосни пахнуть ладаном в АСИНХРОННИХ ПРОПАТЧЕНИХ кадильницях світань' },
//   18
// ).then(console.log);

// // DELETE

// const BASE_URL = 'http://localhost:3000';

// function removeQuote(quoteId) {
//   const options = {
//     method: 'DELETE',
//   };
//   return fetch(`${BASE_URL}/quotes/${quoteId}`, options).then(res => res.json());
// }

// removeQuote(19).then(res => {
//   if (res.ok) {
//     return res.json();
//   }
//   throw new Error(res.statusText);
// });

//////////////////////async version/////////////////////////
// const BASE_URL = 'http://localhost:3000';

// async function removeQuote(quoteId) {
//   const options = {
//     method: 'DELETE',
//   };
//   const res = await fetch(`${BASE_URL}/quotes/${quoteId}`, options);
//   return res;
// }

// removeQuote(19).then(console.log);

///////////////ВИКОРИСТАННЯ У ЗОВНІШНЬОМУ КОДІ//////////////////////////

// async function addAndRenderQuote() {
//   try {
//     const quote = await addQuote();
//     console.log(quote);
//   } catch (error) {
//     console.log(error);
//   }
// }

/////////////////////////ASYNC/AWAIT/////////////////////////////////

// try...catch

// try {
//   console.log('before myVar');

//   myVar;

//   console.log('after myVar');
// } catch (error) {
//   console.log(error.stack);
// }

// // де використовуємо try...catch
// // try...catch використовуємо для того, щоб відловлювати runtime errors
// // (помилки парсу JSON, коли витягуємо щось із local storage etc...)

// const validJSON = '{ "name": "Mango", "age": 3 }';
// const invalidJSON = '{backend sent something like this}';

// // console.log(JSON.parse(validJSON));

// try {
//   console.log(1);
//   console.log(JSON.parse(validJSON));
// //   myVar;
//   console.log(2);
// } catch (error) {
//   if (error.name === 'SyntaxError') {
//     console.log('here we have json parse error');
//   } else {
//     console.log('some other problem');
//   }
// }

// console.log('after try...catch');

// async functions

// async function ffn() {}
// const fn = async function () {};
// const arr = async () => {};
// const x = {
//   async getname() {},
// };
// class y {
//   async getName() {}
// }

// // асинхронна функція ЗАВЖДИ ПОВЕРТАЄ ПРОМІС
// async function getFruit(name) {
//   const fruits = {
//     strawberry: 'полуничка',
//     kiwi: 'ківі',
//     apple: 'апличко',
//   };

//   //   return Promise.resolve(fruits[name]);
//   return 5;
// }

// // відповідно, до реузультату асинхронної функції можемо чейнити then
// // щоби отримати результат асинхронної функції

// function getFruit(name) {
//   const fruits = {
//     strawberry: 'полуничка',
//     kiwi: 'ківі',
//     apple: 'апличко',
//   };

//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(fruits[name]);
//     }, getRandomTime(10, 20));
//   });
// }

// getFruit('apple').then(console.log);

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // результат фетчу буде рандомний, тому що ми не можемо бути впевнені, коли який проміс виконається

// function makeSmoothie() {
//   getFruit('apple').then(console.log);
//   getFruit('kiwi').then(console.log);
//   getFruit('strawberry').then(console.log);
// }

// makeSmoothie();

// // якщо результатом виклику промісу будемо викликати наступний проміс
// // тоді зможемо контролювати порядок виведення результатів:

// function makeSmoothie() {
//   getFruit('apple').then(r => {
//     console.log(r);
//     getFruit('kiwi').then(r => {
//       console.log(r);
//       getFruit('strawberry').then(r => {
//         console.log(r);
//       });
//     });
//   });
// }

// makeSmoothie();

// а тепер та ж функція, але із ситнтаксисом ASYNC...AWAIT
// порядок виконання коду гарантується місцем рядка в коді
// наступний await буде виконано тоді, коли резоланеться (або реджектнеться) попередній

// async function makeSmoothie() {
//   const apple = await getFruit('apple').then(console.log);
//   const kiwi = await getFruit('kiwi').then(console.log);
//   const srawberry = await getFruit('strawberry').then(console.log);
// }

// makeSmoothie();

// // PROMISE.ALL

// function getFruit(name) {
//   const fruits = {
//     strawberry: 'полуничка',
//     kiwi: 'ківі',
//     apple: 'апличко',
//   };

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(fruits[name]);
//       reject('something went wrong');
//     }, 1000);
//   });
// }

// // виконання цієї функції буде відбуватись 3000ms
// // тому що на виконання кожного промісу поставлений таймаут в 1000ms
// async function makeSmoothie() {
//   console.time('makeSmoothie');
//   const apple = await getFruit('apple').then(console.log);
//   const kiwi = await getFruit('kiwi').then(console.log);
//   const srawberry = await getFruit('strawberry').then(console.log);
//   console.timeEnd('makeSmoothie');
// }

// makeSmoothie();

// // але ми можемо повернути всі проміси за один захід, тоді час виконання такого коду
// // буде займати час виконання найдовшого промісу (в нашому випадку - це буде 1000ms)
// // Promise.all дозволяє робити паралельні запити, він чекає, коли виконаються всі і тоді повертає їх
// //  пр чому, всі виконубться

// async function makeSmoothie() {
//   console.time('makeSmoothie');
//   const apple = getFruit('apple');
//   const kiwi = getFruit('kiwi');
//   const strawberry = getFruit('strawberry');

//   const fruits = await Promise.all([apple, kiwi, strawberry]);
//   console.log(fruits);

//   console.timeEnd('makeSmoothie');
// }

// makeSmoothie();

// // try...catch

// async function makeSmoothie() {
//   try {
//     console.time('makeSmoothie');
//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const strawberry = getFruit('strawberry');

//     const fruits = await Promise.all([apple, kiwi, strawberry]);
//     console.timeEnd('makeSmoothie');

//     return fruits;
//   } catch (error) {
//     console.log(error);
//   }
// }

// makeSmoothie().then(console.log);
