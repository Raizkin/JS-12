// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  name: "Artem",
  age: 13,
  hobby: "games",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(user);

const perebir = Object.keys(user);
console.log(perebir);

for (const i of perebir) {
  console.log(`${i}:${user[i]}`);
}

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const countProps = (obj) => Object.keys(obj).length;

console.log(countProps(user));


// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".



// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = (employees) => {
  let totalSum = 0;


  for (const salary of Object.values(employees)) {
    totalSum += salary;
  }

  return totalSum;
};


const salaries = {
  anton: 1000,
  david: 2000,
  Artem: 3000,
  Olexander: 4000,
};

console.log(countTotalSalary(salaries));



// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).



// Викличи функції для перевірки працездатності твоєї реалізації.




const calculateTotalPrice = (allProducts, productName) => {
  let totalSumma = 0;
  for (const { product, price, amount } of allProducts) {
    if (product === productName) {
      totalSumma += price * amount;
  }
  }
  return totalSumma
}
const products = [
  { product: "apple", price: 10, amount: 2 },
  { product: "banana", price: 5, amount: 3 },
  { product: "bread", price: 20, amount: 1 },
  { product: "fanta", price: 10, amount: 1 },
];

console.log(calculateTotalPrice(products, "bread"));
console.log(calculateTotalPrice(products, "banana"));
console.log(calculateTotalPrice(products, "apple"));
console.log(calculateTotalPrice(products, "fanta"));