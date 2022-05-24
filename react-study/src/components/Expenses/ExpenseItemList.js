import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";

const ExpenseItemList = ({ filterdItems }) => {
  if (filterdItems.length === 0) {
    return <h2 className="expense-list__fallback">No Expense Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {filterdItems.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseItemList;
