// 최종 코드
function solution(record) {
  const uid = new Map();
  const arr = record.map((e) => e.split(" ")); // 2차원 배열로 나눔
  let result = [];
  arr.forEach((value) => {
    if (value[0] === "Enter") {
      uid.set(value[1], value[2]);
      result.push([value[1], "님이 들어왔습니다."]);
    } else if (value[0] === "Change") {
      uid.set(value[1], value[2]);
    } else {
      // Leave
      result.push([value[1], "님이 나갔습니다."]);
    }
  });
  return result.map((e) => {
    return uid.get(e[0]) + e[1];
  });
}

// (실패) 처음 푼 코드 - Map object가 있는지 몰랐을 때 짠 코드.
function solution(record) {
  let enter_id = new Set();
  const arr = record.map((e) => e.split(" "));

  for (let value of arr) {
    let enter_id_len = enter_id.size;
    if (value[0] === "Enter") {
      enter_id.add(value[1]);
      if (enter_id.size === enter_id_len) {
        // 이미 들어있던 값일 경우 - 나갔다 다시 들어온 user
        changename(arr, value[1], value[2]);
      }
    }
    if (value[0] === "Change") {
      changename(arr, value[1], value[2]);
    }
  }
  return message(arr);
}

function changename(arr, id, name) {
  for (let uid of arr) {
    if (uid[1] === id) {
      uid[2] = name;
    }
  }
}

function message(arr) {
  return arr
    .map(function (e, i, arr) {
      if (e[0] === "Enter") {
        return "" + e[2] + "님이 들어왔습니다.";
      } else if (e[0] === "Leave") {
        return "" + e[2] + "님이 나갔습니다.";
      } else {
        arr.splice(i, 1);
      }
    })
    .filter((e) => {
      return typeof e == "string";
    });
}
