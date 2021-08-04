let user = {
  name: "John",
  age: 30,
};

const countProperties = (item) => {
  return Object.entries(item).length;
};
console.log(countProperties(user)); // 2

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
const sumSalaries = (item) => {
  return Object.values(item).reduce((acc, cur) => acc + cur, 0);
};
console.log(sumSalaries(salaries)); // 650
