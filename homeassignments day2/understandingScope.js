let genderType="female";
function printGender(){
    let color = "brown";
    if(genderType.startsWith("female")){
        var age=30
        let color="pink"
        console.log("color inside the block",color);
        
    }else { var age=35;
          console.log("color inside the block",color);
    }
    console.log("value of age outside if block",age);
    }
    printGender();
    console.log("value of gender type globally",genderType);
    genderType = "male"

    printGender();
    console.log("value of gender type globally",genderType);
    