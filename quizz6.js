/* 무신사_여성 가방 카테고리 실시간 상품 랭킹 TOP20

    name             // 제품명
    content         // 제품 정보
    price           // 제품 판매가
    purchase_amount // 누적 구매수*/

let product = [
  {
    name: '마뗑킴',
    content: 'BUCKLE BAG IN',
    price: 79200,
    purchase_amount: 10000,
  },

  {
    name: '루에브르',
    content: 'Sac de Maman',
    price: 349000,
    purchase_amount: 9100,
  },

  {
    name: '디어니스',
    content: '패네백(토스트)',
    price: 158480,
    purchase_amount: 8100,
  },

  {
    name: '리끌로우',
    content: 'RC B019 BLACK GLASS',
    price: 26100,
    purchase_amount: 9800,
  },

  {
    name: '프라다',
    content: '여성 스몰 시퀸메쉬 토트백',
    price: 1357000,
    purchase_amount: 9300,
  },

  {
    name: '메트로시티',
    content: 'Fluffy Regular',
    price: 109000,
    purchase_amount: 8900,
  },

  {
    name: '소프트서울',
    content: '하프문 레더백[블랙]',
    price: 198000,
    purchase_amount: 7900,
  },

  {
    name: '비비안',
    content: 'ACCORDION WALLET',
    price: 85000,
    purchase_amount: 6900,
  },

  {
    name: '피에스타',
    content: 'VALERIE BLACK [ALL LEATHER]',
    price: 196200,
    purchase_amount: 9700,
  },

  {
    name: '보노보노',
    content: '버베나 크로스',
    price: 368000,
    purchase_amount: 8700,
  },

  {
    name: '멜론',
    content: 'BUCKLE BAG IN BLACK',
    price: 94000,
    purchase_amount: 7900,
  },

  {
    name: '마지셔우드',
    content: 'ZIPPER SMALL',
    price: 198000,
    purchase_amount: 6900,
  },

  {
    name: '쿠론',
    content: '버베나 크로스',
    price: 368000,
    purchase_amount: 9500,
  },

  {
    name: '필스타',
    content: 'Fluffy Regular',
    price: 109000,
    purchase_amount: 8500,
  },

  {
    name: '마르디 메크르디',
    content: 'VELO BLACKIALL',
    price: 115200,
    purchase_amount: 7500,
  },

  {
    name: '스텐드오일',
    content: 'Bow bag Mini',
    price: 89000,
    purchase_amount: 6500,
  },

  {
    id: 17,
    name: '마지셔우드',
    content: 'BOAT SHOPPER',
    price: 298000,
    purchase_amount: 9200,
  },

  {
    name: '스콘',
    content: 'ACCORDION WALLET',
    price: 85000,
    purchase_amount: 8300,
  },

  {
    name: '페루',
    content: '패네백(토스트)',
    price: 158480,
    purchase_amount: 7300,
  },

  {
    name: '필인더블랭크',
    content: 'Trapezoid PK',
    price: 159000,
    purchase_amount: 6300,
  },
];

// 1. 누적 구매수가 높은 순으로 정렬된 배열을 구하세요.

// 2. 현재 가지고 있는 금액을 파라미터로 갖는 shoppingList 라는 함수를 만들고,
//    3만원 할인 쿠폰 적용시 구매할 수 있는 상품들의 제품명을 배열로 반환하세요.

// ex)
//    const a = purchaseList(156000)
//    console.log(a)

//    결과값
//    ['디어니스', '필인더블랭크', '리끌로우'] (예시)

let rank = product.sort((p1, p2) => {
  if (p1.purchase_amount < p2.purchase_amount) return 1;
  if (p1.purchase_amount === p2.purchase_amount) return 0;
  if (p1.purchase_amount > p2.purchase_amount) return -1;
});
console.log(rank);

function shoppingList(money) {
  let canPurchaseList = rank.map((item) => {
    item.price -= 30000;
    return item;
  });
  let list = canPurchaseList
    .filter((item) => item.price >= 0)
    .filter((item) => money >= item.price);
  return list;
}

// 실행
const a = shoppingList(156000).map((item) => item.name);
console.log(a);
