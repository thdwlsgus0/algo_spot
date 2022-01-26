function solution(cacheSize, cities) {
  let time = 0;
  const cache = [];
  if (cacheSize === 0) return 5 * cities.length;

  const clen = cities.length;
  for (let i = 0; i < clen; i++) {
    const city = cities.shift().toUpperCase(); // 다음에 넣을 값
    const cached = cache.indexOf(city); // 같은 값이 존재하는지
    if (cached === -1) {
      time += 5;
      if (cache.length >= cacheSize) cache.shift();
    } else {
      time += 1;
      cache.splice(cached, 1);
    }
    cache.push(city);
  }
  return time;
}
