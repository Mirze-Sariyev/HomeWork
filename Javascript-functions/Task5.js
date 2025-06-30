function getGradeByScore(score) {
    if (100 >= score && score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else if (0 <= score && score <= 50) {
        return "F"
    }
}

console.log(getGradeByScore(30))
