"use client";
import React, { useState } from "react";

import NewExpense from "@/components/NewExpense/NewExpense.jsx";
import Expenses from "@/components/Expenses/Expenses.jsx";

const DUMMY_EXPENSE_DATA = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const HOME = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSE_DATA);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpense) => {
			return [expense, ...prevExpense];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<div>
				<Expenses items={expenses} />
			</div>
		</div>
	);
};

export default HOME;
