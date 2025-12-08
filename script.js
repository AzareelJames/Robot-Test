function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function play(){
    const test = document.getElementById("test");
    const elements = document.getElementsByClassName("test");

    const answers = {
        "1": "2763",
        "2": "4562",
        "3": "5320",
        "4": "1536",
        "5": "0911",
        "6": "3141",
        "7": "2718",
        "8": "5322",
        "9": "8034",
        "10": "6075",
        "11": "4568",
        "12": "8876",
        "13": "5580",
        "14": "1224",
        "15": "6663",
        "16": "2026",
        "17": "1945",
        "18": "6880",
        "19": "4483",
        "20": "2027"
    };

    let numOfImgs = 0;
    for(let i in answers){
       numOfImgs++; 
    }

    let rand = random(1, numOfImgs);
    const ORGIN = window.location.href;


    test.hidden = false;

    elements[1].src = `images/${rand}.png`;

    let running = true;

    elements[2].addEventListener("keydown", e => {
        if(running) if(e.key !== "Enter") return;

        if(elements[2].value === answers[rand]){
            window.parent.postMessage({"Robot Test Passed": true}, ORGIN);

            elements[0].style.color = "lime";
            elements[0].textContent = "Test completed: You're Human.";

            const btn = document.getElementById("btn");
            btn.hidden = true;

            elements[1].hidden = true;
            elements[2].hidden = true;

            running = false;
        } else{
            window.parent.postMessage({"Robot Test Passed": false}, ORGIN);

            elements[0].style.color = "red";
            elements[0].textContent = "Please try again";

            rand = random(1, numOfImgs);
            elements[1].src = `images/${rand}.png`;
        }
    });
}