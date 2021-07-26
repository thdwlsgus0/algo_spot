function solution(a, b) {
     var answer = '';
     let c;
    switch(a){
        case 1:{
             c=(b-1)%7;
            break;
        }
        case 2:{
            c=(b+30)%7;
            break;
        }
        case 3:{
             c=(b+59)%7;
            break;
        }
        case 4:{
             c=(b+90)%7;
            break;
        }
        case 5:{
             c=(b+120)%7;
            break;
        }
        case 6:{
             c=(b+151)%7;
            break;
            }
        case 7:{
             c=(b+181)%7;
            break;
        }
        case 8:{
            c=(b+212)%7;
            break;
        }
        case 9:{
            c=(b+243)%7;
            break;
        }
        case 10:{
             c=(b+273)%7;
            break;
        }
        case 11:{
             c=(b+304)%7;
        }
        case 12:{
             c=(b+334)%7;
            break;
        }
    }
    switch(c){
                case 0: answer="FRI";break;
                case 1: answer="SAT";break;
                case 2: answer="SUN";break;
                case 3: answer="MON";break;
                case 4: answer="TUE";break;
                case 5: answer="WED";break;
                case 6: answer="THU";break;
            }
    return answer;
}
