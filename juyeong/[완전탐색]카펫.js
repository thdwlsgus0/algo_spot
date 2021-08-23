function solution(brown, yellow) {
    for(let i=1; i<=yellow; i++){
        if(yellow % i === 0){
            const width = yellow/i+2;
            const height = (yellow/(width-2))+2;

            if((width + (height-2)) * 2 === brown){
                return [width, height].sort((a,b)=>{
                    return b-a
                });
            }
        }
    }
}