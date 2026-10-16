function launchBrowser(){
let browserName="chrome";
if(browserName==="chrome"){
    console.log("Browser launched is chrome");
    }else if(browserName==="edge"){
    console.log("Browser launched is edge");
    }else {console.log("default browser will be launched");
    }
}
function runTests(){
let tests="smoke";
switch (tests) {
    case "regression":
        console.log("regression tests will run");
        break;
        case "sanity":
        console.log("sanity tests will run");
        break;
    default:
    console.log("smoke tests will run");
    break;
}
}
launchBrowser();
runTests();