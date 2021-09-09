// 상하좌우
const onePos = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

// 맨허튼거리
const twoPos = [
    [0, 2],
    [2, 0],
    [-2, 0],
    [0, -2]
];

// 대각선거리
const anglePos = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
];

const MAX_LENGTH = 5;

const stepCheckCorona = (place) => {
    let flag = false;
    for(let i = 0; i < place.length; i++) {
        for(let j = 0; j < place[i].length; j++) {
            if(place[i][j] === 'P' && checkDistance(place, i, j)){
                flag = true;
            }
        }
    }
  
    return flag? 0 : 1;
}

const isValidPos = (x, y) => x >= 0 && x < MAX_LENGTH && y >= 0 && y < MAX_LENGTH;

const checkDistance = (place, x, y) => {
    for(let i = 0; i < onePos.length; i++) {
        const [nx, ny] = [x + onePos[i][0], y + onePos[i][1]];
        if(isValidPos(nx, ny)) {
            if(place[nx][ny] === 'P') return true;
        }
    }
    
    for(let i = 0; i < twoPos.length; i++) {
        const [nx, ny] = [x + twoPos[i][0], y + twoPos[i][1]];
        if(isValidPos(nx, ny)) {
            if(place[nx][ny] === 'P' && place[(x + nx)/2][(y + ny)/2] !== 'X') return true;
        }
    }
    
    for(let i = 0; i < anglePos.length; i++) {
        const [nx, ny] = [x + anglePos[i][0], y + anglePos[i][1]];
        if(isValidPos(nx, ny)) {
            if(place[nx][ny] === 'P' && !(place[x][ny] === 'X' && place[nx][y] === 'X')) return true;
        }
    }
    
    return false;
}

function solution(places) {
    let stepAns = [];
    for(let i = 0; i < places.length; i++) {
        stepAns.push(stepCheckCorona(places[i]));
    }
    return stepAns;
}

console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]));
