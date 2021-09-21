const GCD = (a, b) => {
  while (a !== 0) {
    const c = b % a;
    b = a;
    a = c;
  }
  return b;
};

const LCM = (a, b) => {
  return (a * b) / GCD(a, b);
};

function solution(arr) {
  return arr.reduce((lcm, num) => {
    return LCM(lcm, num);
  });
}
