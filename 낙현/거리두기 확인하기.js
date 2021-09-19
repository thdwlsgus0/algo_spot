function manhattan(loc1,loc2){
    return Math.abs(loc1[0]-loc2[0])+Math.abs(loc1[1]-loc2[1]);
}

function rule(array,loc1,loc2){
    if(loc1[0]===loc2[0]){
        for(let i=loc1[1]+1; i<loc2[1]; i++ ){
            if(array[loc1[0]][i]==="X"){
                return true;
            }
        }
    }
    else if(loc1[1]===loc2[1]){
        for(let j=loc1[0]+1; j<loc2[0]; j++){
            if(array[j][loc1[1]]==="X"){
                return true;
            }
        }
    }
    else if(array[loc1[0]][loc2[1]]==="X" && array[loc2[0]][loc1[1]]==="X"){
        return true;
    }
    return false;
}

function main(array){
    let location=[];
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            if(array[i][j]==="P"){location.push([i,j]);} 
        }
    }
console.log(location);
    for(let k=0; k<location.length; k++){
        for(let z=k+1; z<location.length; z++){
            if(manhattan(location[k],location[z])<=2){
                if(!rule(array,location[k],location[z])){
                    return false;                    
                }
            }
        }
    }
   return true;
}

function solution(places,array){
let answer=[];
for (let i of places) {
  main(i)===true? answer.push(1) : answer.push(0);
}
return answer;
}