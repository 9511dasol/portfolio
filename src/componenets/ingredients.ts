import {Project, Ingredient} from "./Types/Intetface"



export const projects: Project[] = [

  {
      title: "카드를 추천해주는 청년들",
      subheading: "Card",
      img: "./img/card.png",
      description: "AI(자연어 처리)를 이용한 카드 추천 웹사이트 제작",
      link: "https://github.com/9511dasol/Card",
  },
  {
      title: "영어 타자 연습",
      subheading: "Taja",
      img: "./img/taja.png",
      description: "영어 긴 글 타자 연습 프로그램 만들기",
      link: "https://github.com/9511dasol/Eng_Taja_Practice",
  },
  {
      title: "Lotto Program",
      subheading: "Lotto",
      img: "./img/lotto.png",
      description: "오픈소프트웨어를 활용한 로또 프로그램 만들기",
      link: "https://github.com/9511dasol/Lotto",
  },
  {
      title: "포트플리오",
      subheading: "Portfolio",
      img: "./img/portfolio.png",
      description: "포트플리오",
      link: "https://github.com/9511dasol/portfolio",
  },
  {
      title: "쇼핑몰 홈페이지",
      subheading: "For JSP",
      img: "./img/shop.png",
      description: "쿠팡을 참고하여 만든 쇼핑몰 홈페이지",
      link: "https://github.com/9511dasol/MiniProject",
  },
  {
      title: "싸이월드 미니홈피(클론코딩)",
      subheading: "mini Homepage",
      img: "./img/Minihomepage.png",
      description: "싸이월드 메인 홈페이지와 미니홈피를 참고하여 만든 사이트",
      link: "https://github.com/9511dasol/MiniProject_2",
  },
  {
      title: "DM of Instagram clone coding",
      subheading: "DM of Instagram",
      img: "./img/DM.png",
      description: "인스타그램을 참고하여 만든 인스타그램 dm page",
      link: "https://github.com/9511dasol/dm",
  },
]


export const allIngredients = [
  { icon: "🖼️", label: "Image" },
  { icon: "📜", label: "Explanation" },
];
// 📜: 설명 🔗:링크, 🖼️: 이미지

const [img, explanation] = allIngredients;
export const initialTabs = [img, explanation];

export function getNextIngredient(ingredients: Ingredient[]): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
