---
title: "리액트 공부"
Date: 2022.05.23
---

### key를 사용하는 이유?

새로운 요소를 추가할 때마다, 리액트는 새로운 아이템을 마지막에 렌더링해주고, 모든 요소들을 업데이트해 컨텐츠를 교체합니다  
그런데 이때 리액트에게는 새롭게 추가된 요소던지, 이전 요소던지 모두 유사해 보이기 때문에 , 눈으로 보기에는 모두 유사하게 보이지만 상태끼리 서로 덮어써지는 상황이 발생할 수도 있습니다.  
그래서 이러한 오류를 방지하기 위해서 키값이 등장하게 되었습니다

### 다양한 키값들

#### 인덱스 활용하기

✔ 추천되는 방법은 아닙니다.

-특정 아이템에 대한 인덱스가 항상 동일합니다  
-아이템 컨텐츠에 직접적으로 추가된 것이 아닙니다  
-key에는 독립적이고, 고유의 값이 필요로 합니다  
-고유 값에는 어떤 원시 값이라도 활용될 수 있습니다. 즉 문자열과 숫자 모두 key 값이 될 수 있다는 이야기죠

### 조건문 활용해 랜더링하기

jsx이기 때문에 우리는 조건문을 활용해 랜더링 해 줄 수 있습니다.

```jsx
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
```

예를 들자면 필터링된 상품들이 있는 경우에만 `map`을 돌려주고, 없는 경우에는 요소를 하나 반환해 주는 것 처럼요
