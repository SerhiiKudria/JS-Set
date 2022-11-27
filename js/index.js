//Create  Set with values 1, 2, 3.
const set = new Set([1, 2, 3]);
console.log("set", set);
//За допомогою методу has перевірте наявність
//елемента зі значенням 3, а потім елемента зі
//значенням 4.
console.log("set.has(3)", set.has(3));
console.log("set.has(4)", set.has(4));
//Додати ще кілька елементів.
set.add(4).add(5);
//За допомогою циклу for-of переберіть колекцію та виведіть у консоль.
for (const iterator of set) {
  console.log("iterator", iterator);
}
//Знайдіть суму цих значень.
let sum = 0;
set.forEach((item) => (sum += item));
console.log("sum", sum);
//Видаліть елемент 2.
set.delete(2);
console.log("set", set);
//Очистіть усю колекцію.
set.clear();
console.log("set", set);
//З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.
const set2 = [...new Set([1, 6, 9, 4, 9, 1, 5, 6])];
console.log("set2", set2);
//З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.
const set3 = [...new Set([...[1, 6, 9, 4, 9, 1, 5, 6], ...[5, 10, 11]])];
console.log("set3", set3);
/* З масиву
створити 
1) масив імен користувачів 
2) мапу вигляду
Map (2) {
  Ivo => [{message, date}, {message, date}],

  Wally => [{message, date}, {message, date}]
}*/
const messages = [
  { id: 1, name: "Ivo", message: "hello", date: new Date() },
  { id: 2, name: "Ivo", message: "how are you", date: new Date() },
  { id: 3, name: "Wally", message: "hi)", date: new Date() },
  { id: 4, name: "Wally", message: "fine)", date: new Date() },
];
const names = [...new Set(messages.map((item) => item.name))];
console.log("names", names);
const namesMessages = new Map();
names.forEach((name) => {
  namesMessages.set(
    name,
    messages
      .filter((message) => name === message.name)
      .map((message) => [message.message, message.date])
  );
});
console.log("namesMessages", namesMessages);
