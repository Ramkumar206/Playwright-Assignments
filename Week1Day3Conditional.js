let browserName = "Chrome";
if (browserName === "Chrome") {
    console.log("You are using Chrome");
}else{
    console.log("You are not using Chrome");
} 
let runTests = "Smoke"
    switch (runTests) {
        case "Regression":
            console.log("Running Regression tests");
            break;
        case "Smoke":
            console.log("Running Smoke tests");
            break;
            case "Sanity":
            console.log("Running Sanity tests");
            break;    
        default:
            console.log("Running Smoke tests");
            break;
    }
/* 
            let runTests = "Functional"
    switch (runTests) {
        case "Regression":
            console.log("Running Regression tests");
            break;
        case "Smoke":
            console.log("Running Smoke tests");
            break;
            case "Sanity":
            console.log("Running Sanity tests");
            break;    
        default:
            console.log("Running Smoke tests");
            break;
    }
 */
/* function launchBrowser (browserName) { 
    if (browserName === "Chrome") {
         console.log("Launching Chrome Browser");
}
else if     (browserName === "Firefox") {
                console.log("Launching Firefox Browser");
    }
}
launchBrowser("Chrome");
launchBrowser("Firefox");
 */