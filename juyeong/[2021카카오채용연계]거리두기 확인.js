// P가 있는지
const isP = (place) => place === "P";

// O가 있는지
const isO = (place) => place === "O";

const isRange = (r) => r >= 0 && r < 5;

const exploreRoom = (place) => {
  for (let i = 0; i < place.length; i++) {
    for (let j = 0; j < place[i].length; j++) {
      console.log(place, place[i], place[i][j]);
      if (place[i][j] === "P") {
        if (isRange(i + 1)) {
          // 1,2,3 => 4 or 5번째 줄이 아닐 경우
          if (isP(place[i + 1][j])) return false;
          if (isO(place[i + 1][j])) {
            if (isRange(i + 2) && isP(place[i + 2][j])) return false;
            if (isRange(j - 1) && isP(place[i + 1][j - 1])) return false;
            if (isRange(j + 2) && isP(place[i + 1][j + 1])) return false;
          }
        }
        if (isRange(i - 1)) {
          // 2,3,4,5
          if (isP(place[i - 1][j])) return false;
          if (isO(place[i - 1][j])) {
            if (isRange(i - 2) && isP(place[i - 2][j])) return false;
            if (isRange(j - 1) && isP(place[i - 1][j - 1])) return false;
            if (isRange(j + 1) && isP(place[i - 1][j + 1])) return false;
          }
        }
        if (isRange(j + 1)) {
          //
          if (isP(place[i][j + 1])) return false;
          if (isO(place[i][j + 1]) && isRange(j + 2) && isP(place[i][j + 2]))
            return false;
        }
        if (isRange(j - 1)) {
          if (isP(place[i][j - 1])) return false;
          if (isO(place[i][j - 1]) && isRange(j - 2) && isP(place[i][j - 2]))
            return false;
        }
      }
    }
  }
  return true;
};

function solution(places) {
  const result = [];
  for (const place of places) {
    exploreRoom(place) ? result.push(1) : result.push(0);
  }
  return result;
}
