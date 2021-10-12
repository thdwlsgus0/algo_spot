const Combinations = (arr, k) => {  // 조합 함수
  const result = [];
  if (k === 1) return arr.map((val) => [val]);
  arr.forEach((left, index, array) => {
    const right = array.slice(index + 1);
    const C = Combinations(right, k - 1);
    const attached = C.map((combination) => [left, ...combination]);
    result.push(...attached);
  });
  return result;
};

function solution(orders, course) {
  const result = [];
  course.forEach((k) => { // 개수 순으로 반복
    const m = new Map();
    const nCk = [];
    let max = 0;
    orders.forEach((str) => {
      const arr = str.split("").sort();
      if (arr.length >= k) nCk.push(Combinations(arr, k)); // 문자열의 길이보다 작은 메뉴구성 수일 경우만
    });
    nCk.flat().map((c) => { // 이차원 배열 1차원으로
      const str = c.join("");
      if (!m.has(str)) m.set(str, 1);
      else m.set(str, m.get(str) + 1);
      max = Math.max(max, m.get(str));
    });

    for (const [key, value] of m) {
      if (value === max && value >= 2) result.push(key);
    }
  });
  return result.sort();
}
