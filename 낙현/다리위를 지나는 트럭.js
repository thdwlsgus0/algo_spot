function solution(bridge_length, weight, truck_weights) {
    let passing = Array(bridge_length).fill(0);
    let time=0;
     
         while(1){
         passing.shift();
         passing.push(0);
         time+=1;
                 
        let result=passing.reduce((sum, current) => sum + current);
             
        if((result+truck_weights[0])<=weight)
         {
            let truck=truck_weights.shift();
            passing[bridge_length-1]=truck;
            result+=truck;
         }
          if(result==0) break;
         }
     return time;
 }