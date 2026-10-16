function gradeCalculation(){
let studentScore=27;
switch(true){
case studentScore >=90 :
    return "Agrade";
    break;
case studentScore < 90 && studentScore > 70 :
    return "Bgrade";
    break;
case studentScore < 70 && studentScore >= 50 :
    return "Cgrade";
    break;
default:
    return "Dgrade";
}

}
console.log(gradeCalculation());
