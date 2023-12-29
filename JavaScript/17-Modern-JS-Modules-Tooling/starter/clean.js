'strict mode';

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const expenseLimit = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = user => expenseLimit[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
console.log(newBudget1);
const newBudget1 = addExpense(budget, expenseLimit, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  expenseLimit,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, expenseLimit, 200, 'Stuff', 'Jay');
console.log(budget);

const check = function () {
  for (const el of budget) {
    if (el.value < -getLimit(el.user)) el.flag = 'limit';
  }
};
check();

console.log(budget);

const bigExpenses = function (limit) {
  let output = '';
  for (const el of budget) {
    if (el.value <= -limit) {
      output += `${el.description.slice(-2)} / `; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
bigExpenses(1000);
