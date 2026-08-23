# Expense Tracker TS

A lightweight command-line expense tracker built with **TypeScript**. It helps categorize spending, calculate totals, filter expenses by category, and find major single purchases.

## Features

* **Type Safety:** Uses an `Expense` interface to validate object properties (`note`, `amount`, and `tag`).
* **Spending Classification:** Categorizes expenses into size levels (`small`, `medium`, `big`) based on amount.
* **Data Processing:** Operates on expense data using native array methods like `.map()`, `.filter()`, `.reduce()`, and `.some()`.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed along with `typescript` and `ts-node`:

```bash
npm install -g typescript ts-node
How to Run
1. Direct execution:

Bash
ts-node expenses.ts
2. Compile and run JS output:

Bash
tsc expenses.ts
node expenses.js

