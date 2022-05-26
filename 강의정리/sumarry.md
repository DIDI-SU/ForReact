---
title: "리액트 공부"
Date: 2022.05.24
---

### JSX에서의 한계

### 1.래핑되지 않은경우

```jsx
return( <h2>hello</h2>
        <h2>I'm didi</h2>
        );
```

위의 경우에는 리액트에서 아래와 같은 에러를 만날 수 있습니다

`Adjacent JSX elements must be wrapped in an enclosing tag`  
일반적으로 JSX에서 루트요소는 1개여야 하기 때문에 위와 같은 에러를 만난 것입니다. 즉 위의 코드에서는 한개 초과의 요소가 함께 루트에 오면 오류가 발생하는 것이지요. 자바스크립트로 생각을 해본다면 이 해하기가 조금더 쉬운데요. 그 이유는 자바스크립트에서도 두개를 반환할 수 없기 때문입니다.배열이나 객체를 이용하면 여러개를 반환할 수 있지만 그것 역시 결국 '하나의 무언가' 라는 사실을 잊지말아야 합니다.  
그래서 이를 해결하기 위해서 `div`로 감싸주거나 `<>,</>` 가 등장하게 됩니다.사실 하나의 값을 만들어 주기 위해서 어떠한 것이라도 이용해주어도 괜찮습니다.그런데 이러한 경우에는 감싸주는 div 들이 많아져 불필요한것 처럼 보이거나 시멘틱을 지치지 않는 것 처럼 보일 수도 있을 것입니다.

### 그렇다면 어떻게 해결해 주어야 할까요?

`Wrapper`컴포넌트를 이용하는 방법도 해결책이 될 수도 있습니다

```jsx
const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
```

바로 위와 같이 단순하게 자식요소를 반환해주는 컴포넌트를 만들어 주면 되는 것이지요!하지만 컴포넌트를 만들어 사용하는 것이 귀찮아진다면 어쩌죠?

### React Fragment의 등장!

`React Fragment`를 사용해주거나 혹은`<></>`를 이용해서 사용해 주면됩니다! 바로 이전에 언급했던 `Wrapper`컴포넌트와 동일한 역할을 해주는 것이죠!

### React Portals

```jsx
   {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
```

위의 코드가 실제 DOM에서는 센션 내부에 모달HTML이 있는 것으로 보일 것 입니다. 물론 작동만 하면 되는 것이지만, 사실 모달은 화면 위에 `overlay`되어야 하는 것이지요. 그래서 시멘틱 적으로도 나중의 스타일링을 위해서라도 위의 구조가 완벽하게 좋다말하기에는 어려울 것입니다.  
그래서 `Potal` 을 이용해 주도록합시다

### Potal?

포탈에는 두가지가 필요합니다.

1. 컴포넌트를 이동시킬 장소
2. 컴포넌트에게 이동할 장소를 알려주어야합니다

1번을 진행해주기 위해서는 `index.html` 에 직접적으로 포탈이 열릴 장소를 작성해주어야합니다

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="backdrop-root"></div>
  <div id="modal-root"></div>
  <div id="root"></div>
</body>
```

바로 위와 같이 렌더링해줄 곳 바로 위에 작성해 줄 수 있죠. 그러면 이것을 실제로 이용해주려면 어떻게 해야할까요? 바로`createPortal`을 이용해주면됩니다. 리액트 돔의 `createPortal`메소드는 말그래로 좋은 때에 좋은 요소를 연결시켜줄 것입니다

```jsx
{
  ReactDOM.createPortal(
    <Backdrop onConfirm={props.onConfirm} />,
    document.getElementById("backdrop-root")
  );
}
```

`createPortal`메소드는 두개의 인자가 들어가는데, 바로 들어가야할 컴포넌트와 그 장소입니다. 전자는 컴포넌트가 후자는 `index.html` 에서 요소가 들어갈 곳이 되는 것이지요
