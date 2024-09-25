const a = "아메리카노";
const a1 = "라떼";

// 타입 어노테이션
const a2: string = "1";
const a3: boolean = !!""; //(true or false)
const a4: number[] = [1, 2, 3, 4, 5];
const a5: {
  name: string;
  isAlive: boolean;
  price: number;
}[] = [
  { name: "아아", isAlive: true, price: 2000 },
  { name: "민트", isAlive: true, price: 2500 },
];

// age, isMan, nation []

const a6: {
  age: number;
  isMan: boolean;
  nation: string;
}[] = [
  { age: 25, isMan: true, nation: "South Korea" },
  { age: 27, isMan: false, nation: "South korea" },
];
