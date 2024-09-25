// |(union): or [유니온을 넣어 문자, 또는 넘버 타입라는걸 알림]
const b: string | number = 1;

// 배열이면서 name[문자],age[문자 or 숫자]
const b1: { name: string; age: string | number }[] = [
  { name: "엄준식", age: "21" },
  { name: "홀란드", age: 24 },
];

// &(intersection [and])
// const b2: string & number => never 타입
const b2: { name: string } & { age: number } = {
  age: 21,
  name: "재민이",
};

const b3: any = { name: "뭐든지 쌉가능" };

const b4: (x: string) => string = (x) => `${x}맛 아이스크림`;

const b5: (x: number) => number = (x) => x ** 2;
