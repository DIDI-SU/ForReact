---
title: "리액트 공부"
Date: 2022.04.14
---

### 이벤트 설정하는 방법

```jsx
<input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
```

위처럼 이벤트가 필요한 요소에 이벤트명과 해당 함수를 입력해줍니다. 이때 함수를 사용하는 것이 아니라 함수를 '가르킵니다'
함수는 특정 이벤트가 있을때에만 가르켜진 함수가 실행됩니다

### e.target.value

```jsx
const dateChangeHandler = (e) => {
  setEnteredtDate(e.target.value);
};
```

위의 값을 읽어오는 경우 항상 `string` 을 받게 됩니다

### useState

```jsx
const [enteredAmount, setEnteredtAmount] = useState("");
```

상태가 필요한 컴포넌트 별로 다양한 `state`를 만들어 줄 수있으며, 이를 별도로 관리해 줄 수 있습니다.

### 만약 같은 로직을 다른 state에서 반복한다면?

```jsx
useState({
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
});
```

그러한 경우에는 객체로 반복되는 `state` 를 관리해 줄 수 있습니다

```jsx
setUserInput({ ...userInput, enteredTitle: e.target.value });
```

`setUserInput`의 경우 초기상태에서 새로운 상태로 업데이트해주는데, 일부 객체만 업데이트시키면 다른 객체가 초기화 되므로, 전체 객체를 가져와 새로운 객체를 오버라이드해주는 방식입니다

### state를 추가적으로 관리하는 방법

```jsx
setUserInput((prvState) => {
  return { ...prvState, enteredTitle: e.target.value };
});
```

그러나 이전의 방법의 경우 , 이전 상태하나로 상태를 관리하고있습니다. 그래서 기존 값을 복사하기위해, 기존 state 스냅샷에 유지하고 계속해서 덮어쓰는 방식으로접근해 주어야합니다.
그래서 객체방식의 `state` 를 관리하거나,count를 사용한다면
그래서 state를 업데이트할때 이전 state에 의존하는게 아니라별개의 함수를 이용해주어야합니다 ㅇㅇ  
그래서 이 함수는 업데이트 할 `state`를 위해서 , 이전 `state` 의 스냅샷을 받게되고 새로운 형태의 스냅샷을 반환해 주기위해서 이전 스냡샷에 새로운 값을 오버라이딩해주는 형태로 접근하는 것 입니다  
리액트는 바로 상태를 업데이트 해주지 않기 때문에, 여러개를 업데이트 함

### state가 const인이유

클로저가 초기 값을 가지고있고 이게 state가 재렌더링되면서 그 값을 대체 해주니까 ㅇㅇ

### 양방향 바인딩

```jsx
<input
  type="date"
  min="2021-12-31"
  max="2022-12-31"
  value={enteredDate}
  onChange={dateChangeHandler}
/>
```

`value={enteredDate}`를 이용해서 `state` 를 이용, 관리해 줄 수있습니다

### 자식대 부모 컴포넌트

자식 컴포넌트에서 부모 컴포넌트로 데이터를 보내주기 위해서는 부모 컴포넌트에서 자식 컴포넌트의 데이터를 받아줄 함수를 만들어 `porps` 로 이용해 주어야합니다

```jsx
  const saveExpenseDateHandler = (enteredData) => {
    const expenseDate = {
      ...enteredData,
      id: Math.random().toString(),
    };
    console.log(expenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExenseData={saveExpenseDateHandler} />
    </div>
```

이 경우에서는 받아온 데이터에 새로운 id 값을 추가해서 더해주는 방식으로 자식 컴포넌트는 이제 `props` 를 이용해 아래과 같이 사용해줄 수있습니다

```jsx
const submitHandler = (e) => {
  e.preventDefault();

  const expenseDate = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };
  props.onSaveExenseData(expenseDate);
  setEnteredTitle("");
  setEnteredtAmount("");
  setEnteredtDate("");
};
```

즉 데이터를 제출할때 데이터를 받아서, 부모컴포넌트에서 만들어준 함수를 위와 같이 사용해 주는 것입니다

---

### 정리

1. state 끌어올리기  
   만약 두 형제 컴포넌트가 하나의 컴포넌트는 데이터를 만들고 , 다른 하나의 컴포넌트는 데이터를 필요로 한다면, 그 둘과 연관된 가장가까운 컴포넌트를 이용해 그 데이터를 이용해 줄 수 있습니다.

- 데이터를 전달해줍니다

```jsx
const submitHandler = (e) => {
  e.preventDefault();

  const expenseDate = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };

  setEnteredTitle("");
  setEnteredtAmount("");
  setEnteredtDate("");
};
```

- 데이터를 사용해주기위해 그 부모 컴포넌트로 갑니다

```jsx
const saveExpenseDateHandler = (enteredData) => {
  const expenseDate = {
    ...enteredData,
    id: Math.random().toString(),
  };
  props.onAddExpense(expenseDate);
};
```

그리고 만들어준 함수를 다시 원자식 컴포넌트에서 사용해 줍니다

```jsx
const submitHandler = (e) => {
  e.preventDefault();

  const expenseDate = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };
  props.onSaveExenseData(expenseDate);
  setEnteredTitle("");
  setEnteredtAmount("");
  setEnteredtDate("");
};
```

이제 데이터 전달이 끝났으므로, 그 데이터를 이용해주기 위해 다시 부모컴포넌트로 이동해 함수를 만들어 이용해줍니다

```jsx
const addExpenseHandler = (expense) => {
  console.log("in app");
  console.log(expense);
};
//----
const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredData) => {
    const expenseDate = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExenseData={saveExpenseDateHandler} />
    </div>
  );
};
```

즉 상태를 가장 가까운 컴포넌트에 저장하고, 그 데이터를 전달해주는 방식으로 `state` 를 이용해 주는 것입니다
