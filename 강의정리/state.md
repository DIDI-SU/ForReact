---
title: "리액트 공부"
Date: 2022.04.09
---

# state and useState

### State?

이전 자바스크립트에---
title: "리액트 공부"
Date: 2022.04.09

---

# state and useState

### State?

이전 자바스크립트에서는 DOM을 통해서 HTML 문서내의 다양한 값들을 업데이트 해주었습니다.하지만 리액트에서는 바닐라 자바스크립트에서의 방식이 그대로 적용되지 않습니다.
그래서 우리는 `State` 에 대해서 알아볼것입니다.

### What is State?

한국어로는 상태라고 하며, 리액트에서는 중요한 개념으로 **_ 변화하는 데이터들 _** 이라 볼 수있습니다.  
리액트에서는 초기 렌더링 이후로 매번 값이 바뀔때마다 컴포넌트들을 다시 렌더링해주지 않습니다. 그래서 리액트를 다시 렌더링해주도록 하려면 특정 함수가 필요합니다.

### useState

특정 함수는 값을 상태로 정의 할 수있도록 도와주며, 값에 변화가 있을때마다 리액트에 변화가 생기도록 도와주는 함수로 대표적으로는 `useState` 가 있습니다.  
이 함수는 컴포넌트 내에서만 사용되며 아래와 같은 형태를 지닙니다

```jsx
useState("초기값", "setter 함수");
```

`useState` 는 setter함수를 이용해 초기값에서 새로운 값을 업데이트해줍니다.
그리고 위의 함수는 아래와 같이 바꾸어줄 수도 있습니다

```jsx
const [init, setInit] = useState(init);
```

이 함수는 단순히 상태를 등록하고, 그 상태의 값을 업데이트해줄 뿐만 아니라, 해당 state가 있는 컴포넌트를 리렌더링해주도록합니다.

```jsx
const ExpenseItem = (props) => {
  const [title, setTitle] = useStat(props.title);
  console.log("랜더링");
  const clickHandler = () => {
    setTitle("Updated!");
    console.log("up");
  };
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
```

현재 `ExpenseItem` 라는 파일에서`ExpenseItem`는 한번 작성되었지만 다른 파일에서 4번씩 사용되는 것을 확인 할 수있습니다. 하지만 이 상태들은 서로 독립되어있습니다. 즉 하나의 컴포넌트의 상태를 바뀐다 하더라도 다른 컴포넌트들의 값에는 영향을 미치지 않는다는 것입니다.

위의 코드에서 '랜더링' 이라는 단어는 4번 출력이되지만, 버튼을 클릭하면 `update!` 라고 제목이 바뀌면서 한번의 `up` 과 `랜더링` 이라는 단어가 출력되는 것을 확인할 수있습니다.  
이는 바로 상태가 컴포넌트 인스턴스단위로 나뉘어져있기 때문입니다.

### 🤔그런데 왜 const일까요?

분명 **업데이트 되는** 값인데도 왜 상태에 `const` 를 사용해줄까요? 그건 바로 새로운 값을 할당해주는 것이 아니기 때문입니다.

```jsx
const [title, setTitle] = useStat(props.title);
const clickHandler = () => {
  setTitle("Updated!");
  console.log("up");
};
```

상태를 업데이트할때마다 `setTitle();`라는 함수를 불러오는데,그 함수의 값은 다른 곳에서 다루기 때문입니다.  
상태 업데이트-> 리렌더링 ->컴포넌트가 재실행되면 새로운 값/최신의 스냅샷을 리액트가 제공합니다 라는 흐름을 지니는 것입니다  
그러면 결국 하나의 값을 덮어쓰는게 아닐까요? 다행히 리액트는 `useState`가 초기게 사용되었을때의 값을 리액트가 기억하기 때문에 ,그래서 그 함수를 최초로 사용했을때 초기값을 그 값을 사용해준다는 것입니다.

---

title: "리액트 공부"
Date: 2022.04.09

---

# state and useState

### State?

이전 자바스크립트에서는 DOM을 통해서 HTML 문서내의 다양한 값들을 업데이트 해주었습니다.하지만 리액트에서는 바닐라 자바스크립트에서의 방식이 그대로 적용되지 않습니다.
그래서 우리는 `State` 에 대해서 알아볼것입니다.

### What is State?

한국어로는 상태라고 하며, 리액트에서는 중요한 개념으로 **_ 변화하는 데이터들 _** 이라 볼 수있습니다.  
리액트에서는 초기 렌더링 이후로 매번 값이 바뀔때마다 컴포넌트들을 다시 렌더링해주지 않습니다. 그래서 리액트를 다시 렌더링해주도록 하려면 특정 함수가 필요합니다.

### useState

특정 함수는 값을 상태로 정의 할 수있도록 도와주며, 값에 변화가 있을때마다 리액트에 변화가 생기도록 도와주는 함수로 대표적으로는 `useState` 가 있습니다.  
이 함수는 컴포넌트 내에서만 사용되며 아래와 같은 형태를 지닙니다

```jsx
useState("초기값", "setter 함수");
```

`useState` 는 setter함수를 이용해 초기값에서 새로운 값을 업데이트해줍니다.
그리고 위의 함수는 아래와 같이 바꾸어줄 수도 있습니다

```jsx
const [init, setInit] = useState(init);
```

이 함수는 단순히 상태를 등록하고, 그 상태의 값을 업데이트해줄 뿐만 아니라, 해당 state가 있는 컴포넌트를 리렌더링해주도록합니다.

```jsx
const ExpenseItem = (props) => {
  const [title, setTitle] = useStat(props.title);
  console.log("랜더링");
  const clickHandler = () => {
    setTitle("Updated!");
    console.log("up");
  };
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
```

현재 `ExpenseItem` 라는 파일에서`ExpenseItem`는 한번 작성되었지만 다른 파일에서 4번씩 사용되는 것을 확인 할 수있습니다. 하지만 이 상태들은 서로 독립되어있습니다. 즉 하나의 컴포넌트의 상태를 바뀐다 하더라도 다른 컴포넌트들의 값에는 영향을 미치지 않는다는 것입니다.

위의 코드에서 '랜더링' 이라는 단어는 4번 출력이되지만, 버튼을 클릭하면 `update!` 라고 제목이 바뀌면서 한번의 `up` 과 `랜더링` 이라는 단어가 출력되는 것을 확인할 수있습니다.  
이는 바로 상태가 컴포넌트 인스턴스단위로 나뉘어져있기 때문입니다.

### 🤔그런데 왜 const일까요?

분명 **업데이트 되는** 값인데도 왜 상태에 `const` 를 사용해줄까요? 그건 바로 새로운 값을 할당해주는 것이 아니기 때문입니다.

```jsx
const [title, setTitle] = useStat(props.title);
const clickHandler = () => {
  setTitle("Updated!");
  console.log("up");
};
```

상태를 업데이트할때마다 `setTitle();`라는 함수를 불러오는데,그 함수의 값은 다른 곳에서 다루기 때문입니다.  
상태 업데이트-> 리렌더링 ->컴포넌트가 재실행되면 새로운 값/최신의 스냅샷을 리액트가 제공합니다 라는 흐름을 지니는 것입니다  
그러면 결국 하나의 값을 덮어쓰는게 아닐까요? 다행히 리액트는 `useState`가 초기게 사용되었을때의 값을 리액트가 기억하기 때문에 ,그래서 그 함수를 최초로 사용했을때 초기값을 그 값을 사용해준다는 것입니다.

---

title: "리액트 공부"
Date: 2022.04.09

---

# state and useState

### State?

이전 자바스크립트에서는 DOM을 통해서 HTML 문서내의 다양한 값들을 업데이트 해주었습니다.하지만 리액트에서는 바닐라 자바스크립트에서의 방식이 그대로 적용되지 않습니다.
그래서 우리는 `State` 에 대해서 알아볼것입니다.

### What is State?

한국어로는 상태라고 하며, 리액트에서는 중요한 개념으로 **_ 변화하는 데이터들 _** 이라 볼 수있습니다.  
리액트에서는 초기 렌더링 이후로 매번 값이 바뀔때마다 컴포넌트들을 다시 렌더링해주지 않습니다. 그래서 리액트를 다시 렌더링해주도록 하려면 특정 함수가 필요합니다.

### useState

특정 함수는 값을 상태로 정의 할 수있도록 도와주며, 값에 변화가 있을때마다 리액트에 변화가 생기도록 도와주는 함수로 대표적으로는 `useState` 가 있습니다.  
이 함수는 컴포넌트 내에서만 사용되며 아래와 같은 형태를 지닙니다

```jsx
useState("초기값", "setter 함수");
```

`useState` 는 setter함수를 이용해 초기값에서 새로운 값을 업데이트해줍니다.
그리고 위의 함수는 아래와 같이 바꾸어줄 수도 있습니다

```jsx
const [init, setInit] = useState(init);
```

이 함수는 단순히 상태를 등록하고, 그 상태의 값을 업데이트해줄 뿐만 아니라, 해당 state가 있는 컴포넌트를 리렌더링해주도록합니다.

```jsx
const ExpenseItem = (props) => {
  const [title, setTitle] = useStat(props.title);
  console.log("랜더링");
  const clickHandler = () => {
    setTitle("Updated!");
    console.log("up");
  };
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
```

현재 `ExpenseItem` 라는 파일에서`ExpenseItem`는 한번 작성되었지만 다른 파일에서 4번씩 사용되는 것을 확인 할 수있습니다. 하지만 이 상태들은 서로 독립되어있습니다. 즉 하나의 컴포넌트의 상태를 바뀐다 하더라도 다른 컴포넌트들의 값에는 영향을 미치지 않는다는 것입니다.

위의 코드에서 '랜더링' 이라는 단어는 4번 출력이되지만, 버튼을 클릭하면 `update!` 라고 제목이 바뀌면서 한번의 `up` 과 `랜더링` 이라는 단어가 출력되는 것을 확인할 수있습니다.  
이는 바로 상태가 컴포넌트 인스턴스단위로 나뉘어져있기 때문입니다.

### 🤔그런데 왜 const일까요?

분명 **업데이트 되는** 값인데도 왜 상태에 `const` 를 사용해줄까요? 그건 바로 새로운 값을 할당해주는 것이 아니기 때문입니다.

```jsx
const [title, setTitle] = useStat(props.title);
const clickHandler = () => {
  setTitle("Updated!");
  console.log("up");
};
```

상태를 업데이트할때마다 `setTitle();`라는 함수를 불러오는데,그 함수의 값은 다른 곳에서 다루기 때문입니다.  
상태 업데이트-> 리렌더링 ->컴포넌트가 재실행되면 새로운 값/최신의 스냅샷을 리액트가 제공합니다 라는 흐름을 지니는 것입니다  
그러면 결국 하나의 값을 덮어쓰는게 아닐까요? 다행히 리액트는 `useState`가 초기게 사용되었을때의 값을 리액트가 기억하기 때문에 ,그래서 그 함수를 최초로 사용했을때 초기값을 그 값을 사용해준다는 것입니다.

---

title: "리액트 공부"
Date: 2022.04.09

---

# state and useState

### State?

이전 자바스크립트에서는 DOM을 통해서 HTML 문서내의 다양한 값들을 업데이트 해주었습니다.하지만 리액트에서는 바닐라 자바스크립트에서의 방식이 그대로 적용되지 않습니다.
그래서 우리는 `State` 에 대해서 알아볼것입니다.

### What is State?

한국어로는 상태라고 하며, 리액트에서는 중요한 개념으로 **_ 변화하는 데이터들 _** 이라 볼 수있습니다.  
리액트에서는 초기 렌더링 이후로 매번 값이 바뀔때마다 컴포넌트들을 다시 렌더링해주지 않습니다. 그래서 리액트를 다시 렌더링해주도록 하려면 특정 함수가 필요합니다.

### useState

특정 함수는 값을 상태로 정의 할 수있도록 도와주며, 값에 변화가 있을때마다 리액트에 변화가 생기도록 도와주는 함수로 대표적으로는 `useState` 가 있습니다.  
이 함수는 컴포넌트 내에서만 사용되며 아래와 같은 형태를 지닙니다

```jsx
useState("초기값", "setter 함수");
```

`useState` 는 setter함수를 이용해 초기값에서 새로운 값을 업데이트해줍니다.
그리고 위의 함수는 아래와 같이 바꾸어줄 수도 있습니다

```jsx
const [init, setInit] = useState(init);
```

이 함수는 단순히 상태를 등록하고, 그 상태의 값을 업데이트해줄 뿐만 아니라, 해당 state가 있는 컴포넌트를 리렌더링해주도록합니다.

```jsx
const ExpenseItem = (props) => {
  const [title, setTitle] = useStat(props.title);
  console.log("랜더링");
  const clickHandler = () => {
    setTitle("Updated!");
    console.log("up");
  };
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
```

현재 `ExpenseItem` 라는 파일에서`ExpenseItem`는 한번 작성되었지만 다른 파일에서 4번씩 사용되는 것을 확인 할 수있습니다. 하지만 이 상태들은 서로 독립되어있습니다. 즉 하나의 컴포넌트의 상태를 바뀐다 하더라도 다른 컴포넌트들의 값에는 영향을 미치지 않는다는 것입니다.

위의 코드에서 '랜더링' 이라는 단어는 4번 출력이되지만, 버튼을 클릭하면 `update!` 라고 제목이 바뀌면서 한번의 `up` 과 `랜더링` 이라는 단어가 출력되는 것을 확인할 수있습니다.  
이는 바로 상태가 컴포넌트 인스턴스단위로 나뉘어져있기 때문입니다.

### 🤔그런데 왜 const일까요?

분명 **업데이트 되는** 값인데도 왜 상태에 `const` 를 사용해줄까요? 그건 바로 새로운 값을 할당해주는 것이 아니기 때문입니다.

```jsx
const [title, setTitle] = useStat(props.title);
const clickHandler = () => {
  setTitle("Updated!");
  console.log("up");
};
```

상태를 업데이트할때마다 `setTitle();`라는 함수를 불러오는데,그 함수의 값은 다른 곳에서 다루기 때문입니다.  
상태 업데이트-> 리렌더링 ->컴포넌트가 재실행되면 새로운 값/최신의 스냅샷을 리액트가 제공합니다 라는 흐름을 지니는 것입니다  
그러면 결국 하나의 값을 덮어쓰는게 아닐까요? 다행히 리액트는 `useState`가 초기게 사용되었을때의 값을 리액트가 기억하기 때문에 ,그래서 그 함수를 최초로 사용했을때 초기값을 그 값을 사용해준다는 것입니다.
서는 DOM을 통해서 HTML 문서내의 다양한 값들을 업데이트 해주었습니다.하지만 리액트에서는 바닐라 자바스크립트에서의 방식이 그대로 적용되지 않습니다.
그래서 우리는 `State` 에 대해서 알아볼것입니다.

### What is State?

한국어로는 상태라고 하며, 리액트에서는 중요한 개념으로 **_ 변화하는 데이터들 _** 이라 볼 수있습니다.  
리액트에서는 초기 렌더링 이후로 매번 값이 바뀔때마다 컴포넌트들을 다시 렌더링해주지 않습니다. 그래서 리액트를 다시 렌더링해주도록 하려면 특정 함수가 필요합니다.

### useState

특정 함수는 값을 상태로 정의 할 수있도록 도와주며, 값에 변화가 있을때마다 리액트에 변화가 생기도록 도와주는 함수로 대표적으로는 `useState` 가 있습니다.  
이 함수는 컴포넌트 내에서만 사용되며 아래와 같은 형태를 지닙니다

```jsx
useState("초기값", "setter 함수");
```

`useState` 는 setter함수를 이용해 초기값에서 새로운 값을 업데이트해줍니다.
그리고 위의 함수는 아래와 같이 바꾸어줄 수도 있습니다

```jsx
const [init, setInit] = useState(init);
```

이 함수는 단순히 상태를 등록하고, 그 상태의 값을 업데이트해줄 뿐만 아니라, 해당 state가 있는 컴포넌트를 리렌더링해주도록합니다.

```jsx
const ExpenseItem = (props) => {
  const [title, setTitle] = useStat(props.title);
  console.log("랜더링");
  const clickHandler = () => {
    setTitle("Updated!");
    console.log("up");
  };
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
```

현재 `ExpenseItem` 라는 파일에서`ExpenseItem`는 한번 작성되었지만 다른 파일에서 4번씩 사용되는 것을 확인 할 수있습니다. 하지만 이 상태들은 서로 독립되어있습니다. 즉 하나의 컴포넌트의 상태를 바뀐다 하더라도 다른 컴포넌트들의 값에는 영향을 미치지 않는다는 것입니다.

위의 코드에서 '랜더링' 이라는 단어는 4번 출력이되지만, 버튼을 클릭하면 `update!` 라고 제목이 바뀌면서 한번의 `up` 과 `랜더링` 이라는 단어가 출력되는 것을 확인할 수있습니다.  
이는 바로 상태가 컴포넌트 인스턴스단위로 나뉘어져있기 때문입니다.

### 🤔그런데 왜 const일까요?

분명 **업데이트 되는** 값인데도 왜 상태에 `const` 를 사용해줄까요? 그건 바로 새로운 값을 할당해주는 것이 아니기 때문입니다.

```jsx
const [title, setTitle] = useStat(props.title);
const clickHandler = () => {
  setTitle("Updated!");
  console.log("up");
};
```

상태를 업데이트할때마다 `setTitle();`라는 함수를 불러오는데,그 함수의 값은 다른 곳에서 다루기 때문입니다.  
상태 업데이트-> 리렌더링 ->컴포넌트가 재실행되면 새로운 값/최신의 스냅샷을 리액트가 제공합니다 라는 흐름을 지니는 것입니다  
그러면 결국 하나의 값을 덮어쓰는게 아닐까요? 다행히 리액트는 `useState`가 초기게 사용되었을때의 값을 리액트가 기억하기 때문에 ,그래서 그 함수를 최초로 사용했을때 초기값을 그 값을 사용해준다는 것입니다.
