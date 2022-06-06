//primitives: 숫자, 문자, boolean
//complex: array, objects..

//promitives
//number
let age: number;
age = 12;

let ages: number = 12;
//string
let userName: string;
userName = "Max";
//boolean
let isAdult: boolean;
isAdult = false;

//null과  undifined의 경우에는 단순 초반에
///null과 undifine로 설정하는 경우 값을 바꿔야할때
//문제가 발생하므로 조금 다른 방법을 이용해 주어야
//합니다

//array
let hobbies: string[];

hobbies = ["Sporst"];

//object
type Person = {
  name: string;
  age: number;
};
let person: Person;
person = { name: "max", age: 10 };

//object in array
let people: Person[];

people = [
  { name: "max", age: 10 },
  { name: "max", age: 10 },
  { name: "max", age: 10 },
];

//유니온: 하나의 변수에 한개이상의 타입을 저장할 수있으,ㅁ

let course: string | number = "react";

course = 12;

//타입별칭(Type Alias)

//타입스크립트에서는 결국 반환되는 값의 타입역시 고려해주어야합니다

function add(a: number, b: number) {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}
