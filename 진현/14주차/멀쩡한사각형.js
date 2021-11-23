const gcd = (w, h) => {
    return w % h === 0? h: gcd(h, w % h);
}

const getAnswer = (w, h) => {
    return w * h - (gcd(w, h) * (w / gcd(w, h) + h / gcd(w, h)) - gcd(w, h));
}

function solution(w, h) {
    const maxValue = Math.max(w, h);
    const minValue = Math.min(w, h);
    return getAnswer(maxValue, minValue);
}