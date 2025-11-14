// 1 masala
// let result = [];
// for (let i = 1; i <= 50; i++) {
//   if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
//     result.push(i)
//   }
// } console.log(result);

// 2 masala
// let numbers = [1, 12, 4, 54, 8, 9, 17]
// let result = []
// for (let son of numbers) {
//     if (son < 10 && son >= 0) {
//         result.push(son)
//     }
// } console.log(result)

// 4 masala
// let numbers = [1, 2, 2, 3, 4];
// let result = false;
// for (let i = 0; i < numbers.length - 1; i++) {
//   if (numbers[i] === numbers[i + 1]) {
//     result = true;
//     break;
//   }
// } console.log(result);

// 5 masala
// let data = {
//   a: 5,
//   b: [2, 3, 7],
//   c: 10,
//   d: [1, 4],
// }; let son = 0;
// for (let key in data) {
//   let val = data[key];
//   if (Array.isArray(val)) for (let n of val) son += n;
//   else son += val;
// } console.log(son);

// 8 masala
// let grades = [1, 2, 3, 4, 5];
// let result = [];
// for (let grade of grades) {
//   if (grade < 5) result.push(grade + 1);
//   else result.push(grade);
// } console.log(result)

// 9 masala
// let people = [
//   { name: "Umarali", age: 19 },
//   { name: "Nodirbek", age: 20 },
//   { name: "Madina", age: 16 },
//   { name: "Sardor", age: 25 }
// ];
// let kichiklar = [];
// let kattalar = [];
// for (let person of people) {
//   if (person.age < 18) kichiklar.push(person);
//   else kattalar.push(person);
// }
// console.log(kichiklar);
// console.log(kattalar);

// 11 masala
// let matrix = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [6, 7, 8],
// ];
// let result = [];
// for (let row of matrix) {
//   let son = 0;
//   for (let nam of row) {
//     son += nam;
//   }
//   result.push(son)
// }
// console.log(result);

// 12 masala
// let nums = [3, 1, 4];
// let result = [];
// for (let i = 0; i < nums.length; i++) {
//   let count = 0;
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[j] > nums[i]) {
//       count++;
//     }
//   }
//   result.push(count);
// } console.log(result);

// 13 masala
// let user = {
//   name: "Umarali",
//   age: 19,
//   address: {
//     city: "Toshkent",
//     street: "Yangi hayot",
//   },
// };
// for (let key in user) {
//   let value = user[key];
//   if (typeof value === "object" && value !== null) {
//     for (let innerKey in value) {
//       console.log(`${innerKey} = ${value[innerKey]}`);
//     }
//   } else {
//     console.log(`${key} = ${value}`);
//   }
// }

// 14 masala
// let temp = [15, 22, 18, 27, 30, 10, 25];
// let son = 0;
// for (let t of temp) son += t;
// let orta = son / temp.length;
// let katta = [];
// for (let t of temp) if (t > orta) katta.push(t);
// console.log(orta);
// console.log(katta);

// 15 masala
// let numbers = [3, null, 5, undefined, 8, 14];
// let result = [];
// for (let son of numbers) {
//   if (son === son && son != null) result.push(son);
// }
// console.log(result);

// 16 masala
// function sumOfEvenSquares(...nums) {
//   let son = 0;
//   for (let n of nums) {
//     if (n % 2 === 0) {
//       son += n * n;
//     }
//   }
//   return son;
// }
// console.log(sumOfEvenSquares(1, 2, 3, 4, 5, 6));

// 17 masala
// let array = [2, 4, 3, 6, 9, 16];
// let son;
// for (let nam of array) {
//   if (son !== undefined && nam - son > 3) {
//     console.log(son, nam);
//   }
//   son = nam;
// }

// 19 masala
// let numbers = [2, 4, -3, 5, 7, 8, 9];
// let result = [];
// let found = false;
// for (let nam of numbers) {
//   if (found) result.push(nam);
//   if (nam < 0) found = true;
// } console.log(result);

// 20 masala
// let profile = {
//   name: "Umarali",
//   age: 19,
//   hobbies: ["coding", "football"],
//   city: "Toshkent",
// };
// for (let key in profile) {
//   let value = profile[key];
//   if (Array.isArray(value)) {
//     for (let item of value) {
//       console.log(`${key}: ${item}`);
//     }
//   } else {
//     console.log(`${key}: ${value}`);
//   }
// }

// ################### 5 talik masalalar ###########################

// 1 masala
// const arr = [
//   { id: 1, name: "Botir", age: 20, habbay: "Football" },
//   { id: 2, name: "Anvar", age: 22, habbay: "Basketball" },
//   { id: 3, name: "Shohrux", age: 20, habbay: "Basketball" },
//   { id: 4, name: "Akram", age: 22, habbay: "Football" },
// ];
// for (let user of arr) {
//   console.log(user.age, user.habbay);
// }

// 3 masala
// let arr = [22, 112, 3, 4, 222, 123, 43];
// let max = Math.max(...arr);
// arr.unshift(max);
// console.log(arr);

// 4 masala
// let size = Number(prompt("size kiritng"));
// let ismlarArr = [];
// for (let i = 0; i < size; i++) {
//   let user = prompt(`${i + 1}.ism kiriting`);
//   ismlarArr.push(user);
// } console.log(ismlarArr)

// 5 masala
// let son = Number(prompt("son kiritng"));
// let arr = [];
// for (let i = 1; i <= son; i++) arr.push(i);
// arr.reverse();
// console.log(arr);

// #####################Qushimcha masalalar ############################
// 1 masala
// let nam = +prompt("3 xonali son kiriting:");
// let a = Math.floor(nam / 100);
// let b = Math.floor(nam / 10) % 10;
// let c = nam % 10;
// let natija = a + c - b;
// console.log(natija);

// 2 masala
// let a = Number(prompt("son kiriting"));
// let son = 0;
// for (let i = 1; i <= a; i++) {
//     if (a % i === 0) {
//         son += i
//     }
// } console.log(son)

// 3 masala
// let arr = [true, "salom", 23, undefined]
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === "string") {
//         arr[i] = null
//     }
// } console.log(arr)

// 4 masala
// let arr = [2, 3, 4, 5, 2, 3, 4, 5, 3, 5, 2, 23, 43, 2];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// } console.log(max);

// 5 masala
// let arr = [54, 32, 76, 12, 22];
// let son = 0;
// for (let i = 0; i < arr.length; i++) {
//   son += arr[i];
// } console.log(son);

// 7 masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     result.push(0);
//   } else {
//     result.push(arr[i]);
//   }
// } console.log(result);

// 8 masala
// let a = +prompt("1 sonni kiriting:");
// let b = +prompt("2 sonni kiriting:");
// let amal = prompt("Amalni kiriting (+, -, *, /):");
// switch (amal) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   default:
//     console.log("Noto'g'ri amal kiritildi!");
// }

// 9 masala
// let arr = ["Nuriddin", "Shaxboz", "Adham", "Suxrob"];
// let ism = prompt("Ism kiriting:");
// if (arr.includes(ism)) {
//   console.log("Bor");
// } else {
//   console.log("Yo‘q");
// }
