const valid = (x) => x < 5 ? true : false;

function solution(places) {
    let answer = [];
    let flag = true;
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            for(let k = 0; k < 5; k++){
                if(places[i][j][k] === 'P'){
                    if(valid(k+1) && valid(j+1)){
                        if(places[i][j][k+1] === 'P' || places[i][j+1][k] === 'P'){
                            answer.push('0');
                            flag = false;
                            i += 1;
                        }
                        if(places[i][j][k+1] === '0'){
                            if(valid(k+2)){
                               if(places[i][j][k+2] === 'P' || places[i][j+1][k+1] === 'P'){
                                    answer.push('0');
                                    flag = false;
                                    i += 1;
                                }
                            }
                        }
                        if(places[i][j+1][k] === '0'){
                            if(valid(k+2)){
                                if(places[i][j+2][k] === 'P' || places[i][j+1][k+1] === 'P'){
                                    answer.push('0');
                                    flag = false;
                                    i += 1;
                                }
                            }
                        }
                    }
                }
                else if(places[i][j][k] === '0'){
                    if(places[i][j][k+1] === 'P' && places[i][j+1][k] === 'P'){
                        answer.push('0');
                        flag = false;
                        i += 1;
                    }
                    if(places[i][j][k+1] === 'P'){
                        if(valid(k+2)){
                            if(places[i][j][k+2] === 'P' || places[i][j+1][k+1] === 'P'){
                                answer.push('0');
                                flag = false;
                                i += 1;
                            }
                        }
                    }
                    if(places[i][j+1][k] === 'P'){
                        if(valid(k+2)){
                            if(places[i][j+2][k] === 'P' || places[i][j+1][k+1] === 'P'){
                                answer.push('0');
                                flag = false;
                                i += 1;
                            }
                        }
                    
                    }
                }
                else if(places[i][j][k] === 'X'){
                    if(places[i][j][k+1] === 'P' && places[i][j+1][k] === 'P'){
                        if(places[i][j+1][k+1] === 'P'){
                            answer.push('0');
                            flag = false;
                            i += 1;
                        }
                    }
                    if(places[i][j][k+1] === 'P'){
                        if(valid(k+2)){
                            if(places[i][j][k+2] === 'P'){
                                answer.push('0');
                                flag = false;
                                i += 1;
                            }
                        }
                    }
                    if(places[i][j+1][k] === 'P'){
                        if(valid(k+2)){
                            if(places[i][j+2][k] === 'P'){
                                answer.push('0');
                                flag = false;
                                i += 1;
                            }
                        }
                    }
                }
            }
        }
        if(flag) answer.push('1');
        flag = true;
    }
    return answer;
}