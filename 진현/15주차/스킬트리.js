const skillCheckHandler = (skill, skill_trees) => {
    let answer = 0;

    for(let i = 0; i < skill_trees.length; i++) {
        let skillCheckFlag = true;
        let skillTreeArray = skill.split('');
        
        for(let j = 0; j < skill_trees[i].length; j++) {
            if(skillTreeArray.includes(skill_trees[i][j])) {
                if(skillTreeArray[0] === skill_trees[i][j]) {
                    skillTreeArray.shift();
                }else {
                    skillCheckFlag = false;
                    break;
                }
            }
        }
        
        if(skillCheckFlag) answer++;
    }
    
    return answer;
}

function solution(skill, skill_trees) {
    return skillCheckHandler(skill, skill_trees);
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))