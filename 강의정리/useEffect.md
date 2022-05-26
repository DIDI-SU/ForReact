---
title: "리액트 공부"
Date: 2022.04.21
---

# useEffect

웹자체가 지니는 stateless의 특성으로 인해서, 이제 데이터를 유지하기위해 위의 훅을 사용해 보았습니다. 즉 매번 로그인을 다시해 줘야하는 문제를 잠시나마 해결하기 위해서 `localStorage` 를 이용해 주고, 이를 `useEffect`를 통해 사용해 보는 거죠.

### useEffect

`useEffect` 는 의존성에 따라서 다양한 순간에 실행됩니다. 비어있는 경우에는 결국 계속 실행되므로 무한 루프를 만들 수도 있지만, `[]` 빈 배열을 넣어준다면 초기 렌더링 시에 이를 사용해줄 수 있습니다.
무한 루프가 발생되는 이유는`useEffect` 가 모든 컴포넌트의 렌더링 주기 후에 실행되기 때문입니다.

```jsx
useEffect(() => {
  const storedUser = localStorage.getItem("isLoggedIn");
  if (storedUser === "1") {
    setIsLoggedIn(true);
  }
}, []);

const logoutHandler = () => {
  setIsLoggedIn(false);
};
```

유효성검사와 `useEffect`를 함께 사용해준 경우 입니다. 이경우에는

```jsx
const storedUser = localStorage.getItem("isLoggedIn");
if (storedUser === "1") {
  setIsLoggedIn(true);
}
```

위와 같은 코드가 무한 루프를 만들기 때문에 이를 방지해주기 위한 목적 역시 존재합니다. 그래서 `useEffect`와 함께 사용해준다면, 로그인 후에 로컬스토리지에 1이라는 값이 존재하면, 로그인이 되어있는 상태라는 것을 새로고침을하거나, 재렌더링 될때마다 확인 해 로그인을 유지 시킬 수 있습니다.

즉 `useEffect`의 두번째 인자에 빈 배열의 경우에는 , 첫 렌더링을 실시할 때, 그리고 `state`를 넣어주는 경우에는 해당 `state`에 변화가 있거나, 혹은 재렌더링이 발생할때라고 할 수 있습니다

### useEffect에서의 종속성

종속성에는 다양한 변수들이 들어갈 수 있습니다. `state`가 들어 갈 수도 있고, set함수 역시 들어갈 수도 있습니다.하지만 아래의 예외사항을 통해서 사용해야할 경우와 아닌 경우를 고민해 보는 편이 좋습니다

### useEffect 에서의 예외사항들

상태 업데이트 기능을 추가할 필요가 없습니다.React는 해당 함수가 절대 변경되지 않도록 보장하므로 종속성으로 추가할 필요가 없습니다.

또한 "내장" API 또는 함수를 추가할 필요가 없습니다 fetch(), 나 localStorage 같은 것들 말이죠 (브라우저에 내장된 함수 및 기능, 따라서 전역적으로 사용 가능): 이러한 브라우저 API/전역 기능은 React 구성 요소 렌더링 주기와 관련이 없으며 변경되지 않습니다.

또한 변수나 함수를 추가할 필요가 없습니다. 아마도 구성 요소 외부에서 정의했을 겁니다 (예: 별도의 파일에 새 도우미 함수를 만드는 경우): 이러한 함수 또는 변수도 구성 요소 함수 내부에서 생성되지 않으므로 변경해도 구성 요소에 영향을 주지 않습니다 (해당 변수가 변경되는 경우, 또는 그 반대의 경우에도 구성 요소는 재평가되지 않습니다)

간단히 말해서: effect 함수에서 사용하는 모든 "것들"을 추가해야 합니다. 구성 요소(또는 일부 상위 구성 요소)가 다시 렌더링 되어 이러한 "것들"이 변경될 수 있는 경우.그렇기 때문에 컴포넌트 함수에 정의된 변수나 상태, 컴포넌트 함수에 정의된 props 또는 함수는 종속성으로 추가되어야 합니다!

### Clean Up!

Clean Up은 `useEffect` 의 첫번째 인자가 반환할 수있는 값으로, 첫번째 인자 즉 함수가 실행되기 전에 실행됩니다. 그러나, 최초로 `useEffect`가 실행되기 전에는 실행되지 않습니다 즉 최초 이후로 `useEffect`가 실행되는 경우에 이 함수가 실행된다는 것입니다

```jsx
useEffect(() => {
  //500밀리초 동안 입력이X면 확인ㅇㅇ
  const timer = setTimeout(() => {
    console.log("타이머");
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, 500);

  return () => {
    console.log("clean");
    clearTimeout();
  };
}, [enteredEmail, enteredPassword]);
```
