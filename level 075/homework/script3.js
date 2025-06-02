let student = {
    fullName: "John Doe",
    scores: [85, 90, 78, 92, 88],
    
    averageScore() {
        let total = this.scores.reduce((acc, score) => acc + score, 0);
        return total / this.scores.length;
    },
    
    checkStudent() {
        let avg = this.averageScore();
        if (avg > 90) {
            console.log("საუკეთესო სტუდენტი");
        } else if (avg > 60) {
            console.log("კარგი მოსწავლე");
        } else {
            console.log("ნორმალური მოსწავლე");
        }
    }
};
