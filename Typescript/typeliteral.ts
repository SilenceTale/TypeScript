type angryDepth = 1 | 2 | 3 | 4 | 5;

const d1: angryDepth = 5;

type jobType = "전사" | "마법사" | "궁수" | "도적";

const d2: { id: string; level: number; job: jobType } = {
  id: "zl표독법사zl",
  level: 155,
  job: "도적",
};
type Hamburger = "불고기버거" | "치즈버거" | "새우버거" | "빅맥" | "상하이버거";
type Side = "감자튀김" | "치즈스틱" | "콘솔로우" | "해쉬브라운";
type Drinks =
  | "제로콜라"
  | "콜라"
  | "환타"
  | "물"
  | "스프라이트"
  | "제로 스프라이트";

type Setmenu = {
  main: Hamburger;
  side: Side;
  drinks: Drinks;
};

const myMacdonald: Setmenu = {
  main: "빅맥",
  side: "감자튀김",
  drinks: "제로콜라",
};

//type subway = 빵, 메인, 치즈, 고기, 야채, 소스1, 소스2

type Bread =
  | "허니오트"
  | "하티"
  | "위트"
  | "파마산 오레가노"
  | "화이트"
  | "플랫브레드";
type Main = "에그마요" | "이탈리안 비엘티" | "비엘티" | "햄" | "참치" | "";
type Cheese = "아메리칸 치즈" | "슈레드 치즈" | "모차렐라 치즈";
type vegetables =
  | "양상추"
  | "토마토"
  | "오이"
  | "피망"
  | "양파"
  | "피클"
  | "올리브"
  | "할라피뇨"
  | "아보카도";
type Sauce =
  | "랜치"
  | "스위트 어니언"
  | "마요네즈"
  | "스위트 칠리"
  | "스모크 바비큐"
  | "핫 칠리"
  | "허니 머스타드"
  | "사우스웨스트 치폴레"
  | "홀스래디쉬"
  | "머스타드"
  | "엑스트라 버진 올리브 오일"
  | "레드 와인 식초"
  | "소금"
  | "후추";

type subway = {
  bread: Bread;
  main: Main;
  cheese: Cheese;
  vegetable: vegetables[];
  sauce: Sauce[];
};

const meet: subway = {
  bread: "허니오트",
  main: "이탈리안 비엘티",
  cheese: "모차렐라 치즈",
  vegetable: ["아보카도", "양상추"],
  sauce: ["레드 와인 식초", "소금"],
};
