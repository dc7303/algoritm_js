function solution(n) {
  const cache = [1, 2];

  for (let i = 2; i < n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  console.log(cache);
  return cache[n - 1];
}

const result = solution(100);
console.log(`결과 값 : ${result}`);
