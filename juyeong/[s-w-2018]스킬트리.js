function solution(skill, skill_trees) {
    let result = skill_trees.length;
    const in_skill = skill_trees.map((tree)=>tree.split('').filter((s)=>skill.includes(s)));
    for(const skills of in_skill){
        for(let i=0; i< skills.length; i++){
            if(skill[i] !== skills[i]){
                result--;
                break;
            }
        }
    }
    return result;
}