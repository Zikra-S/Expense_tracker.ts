interface Expense {
  note: string;
  amount: number;
  tag: string;
}

const expenses: Expense[] = [
  { note: "lunch", amount: 150, tag: "food" },
  { note: "taxi", amount: 90, tag: "transport" },
  { note: "dinner", amount: 220, tag: "food" },
  { note: "bus", amount: 30, tag: "transport" },
  { note: "movies", amount: 120, tag: "fun" },
];

function level(amount: number): string {
  if (amount >= 200) {
    return "big";
  } else if (amount >= 100) {
    return "medium";
  } else {
    return "small";
  }
}

const format = ({ note, tag, amount }: Expense): string => {
  const name = note.toUpperCase();
  const value = level(amount);
  return `${name} - ${amount} birr [${tag}] (${value})`;
};

const formattedExpense: string[] = expenses.map(format);

for (let newList of formattedExpense) {
  console.log(newList);
}

let totalSpent: number = expenses.reduce((sum: number, item: Expense) => sum + item.amount, 0);
console.log(`Total spent: ${totalSpent} birr`);

let foodSpending: number = expenses.filter((item: Expense) => item.tag === "food").reduce((total: number, item: Expense) => total + item.amount, 0);

console.log(`Food spending: ${foodSpending} birr`);

let bigExpense: Expense = expenses.reduce((prev: Expense, current: Expense) => {
  return prev.amount > current.amount ? prev : current;
});

console.log(`Biggest expense: ${bigExpense.note} (${bigExpense.amount} birr)`);

let check: boolean = expenses.some((item: Expense) => item.amount > 200);
console.log(`Any single expense over 200: ${check}`);

let countBigExpenses: Expense[] = expenses.filter((item: Expense) => level(item.amount) === "big");
console.log(`Big expenses: ${countBigExpenses.length}`);
