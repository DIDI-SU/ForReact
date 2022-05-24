import ExpenseItemList from "./ExpenseItemList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

import Card from "../UI/Card";
import { useState } from "react";

const Expenses = ({ expensItem }) => {
  const [filterYear, setfilterYear] = useState("2021");
  const onaddDate = (item) => {
    setfilterYear(item);
  };
  const filterdItems = expensItem.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} addDate={onaddDate} />
        <ExpenseChart expenseItem={filterdItems} />
        <ExpenseItemList filterdItems={filterdItems} />
      </Card>
    </div>
  );
};
export default Expenses;
