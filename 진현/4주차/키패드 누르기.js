/*
 키패드 누르기 1번 풀이 : 객체 배열을 이용한 문제 풀이
*/

const getDistance = (current, next) => {
	return Math.abs(current.x - next.x) + Math.abs(current.y - next.y);
}

function solution(numbers, hand) {
let answer = '';
const phone = [
	{x: 1, y: 3},
	{x: 0, y: 0},
	{x: 1, y: 0},
	{x: 2, y: 0},
	{x: 0, y: 1},
	{x: 1, y: 1},
	{x: 2, y: 1},
	{x: 0, y: 2},
	{x: 1, y: 2},
	{x: 2, y: 2}
];

const left = {
	'x': 0,
	'y': 3
};

const right = {
	'x': 2,
	'y': 3
};

for(let i = 0; i < numbers.length; i++) {
   
   if([3,6,9].includes(numbers[i])) answer += 'R';
   if([1,4,7].includes(numbers[i])) answer += 'L';
   if([2,5,8,0].includes(numbers[i])){
	   if(getDistance(left, phone[numbers[i]]) === getDistance(right, phone[numbers[i]])){
		  answer += hand === 'left'? 'L' : 'R';
	   }
	   if(getDistance(left, phone[numbers[i]]) > getDistance(right, phone[numbers[i]])) {
		  answer += 'R';
	   }
	   if(getDistance(left, phone[numbers[i]]) < getDistance(right, phone[numbers[i]])) {
		  answer += 'L';
	   }
   }
	
   if(answer[answer.length-1] === 'L') {
	   [left.x, left.y] = [phone[numbers[i]].x, phone[numbers[i]].y];
   }
	
   if(answer[answer.length-1] === 'R') {
	   [right.x, right.y] = [phone[numbers[i]].x, phone[numbers[i]].y];
   }
}

return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	, "right"));