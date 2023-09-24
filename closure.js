// function calisanYarat() {
//   let isim = "Mehmet";

//   return function () {
//     console.log(isim);
//   };
// }

// let isim = "Zafer";

// // fonksiyon yarat
// let is = calisanYarat();

// // çağır
// is(); // burada "Mehmet" mi yoksa "Zafer" mi gösterilecek ?

// function basla() {
//   var sayi = 0;

//   setTimeout(function () {
//     console.log(sayi++);
//     setTimeout(function () {
//       console.log(sayi++);
//       setTimeout(function () {
//         console.log(sayi++);
//       }, 100);
//     }, 200);
//   }, 300);
// }
// basla(); // 0 1 2

// function basla() {
//   for (var i = 1; i <= 5; i++) {
//     //let ve var farklı sonuçlar üretiyor !!
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// basla(); //6 6 6 6 6

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12
