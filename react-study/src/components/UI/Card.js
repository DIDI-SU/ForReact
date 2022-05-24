import "./Card.css";

const Card = (props) => {
  //props.className : 외부에서 추가적으로 받은 className을 추가해줌
  //컴포지션: 컴포넌트를 합치는거
  //레퍼 컴포넌트
  //래퍼가 필요한 이유는 결국
  //이전 js 방식으로 생각하면 당연함 ㅇㅇ
  //children prop
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
