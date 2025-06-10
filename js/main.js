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

for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}


// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

function countProps(obj) {
  return Object.keys(obj).length;
}


const userFirst = {
  name: "Artem",
  age: 13,
  hobby: "skydiving",
  premium: false,
  mood: "happy",
};

console.log(countProps(userFirst));