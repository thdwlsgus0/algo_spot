function solution(n, arr1, arr2) {
    var answer = [];
    let sample;

   for(let index=0; index<n; index++){
   let sample=(arr1[index] | arr2[index]).toString(2);
   let result=[];
    for(let i= sample.length-n; i<sample.length; i++ ){
        if(sample[i]==='1'){
            result.push('#');
        }
        else {
            result.push(' ');
        }
    }
    answer.push(result.join(''));
   }
    return answer;
}
