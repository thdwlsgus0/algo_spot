function solution(bridge_length, weight, truck_weights) {
  let clock = 0; // 최종 시간
  let queue = new Array(bridge_length).fill(0); // 다리 위에 있는 트럭

  while (truck_weights.length) {
    // 남아있는 트럭이 없을 때까지
    clock++;
    queue.shift();
    let sum_queue = queue.reduce((a, b) => a + b); // 헌재 다리위 트럭무게

    if (sum_queue + truck_weights[0] <= weight)
      queue.push(truck_weights.shift());
    else queue.push(0);

    if (truck_weights.length === 0) {
      clock += bridge_length;
      break;
    }
  }

  return clock;
}
