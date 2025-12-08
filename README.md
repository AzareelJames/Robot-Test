# Robot Test
<img src="favicon.png">

A robot test is similar to CAPCTHA.

# How to add in your HTML Code?

# 1. Add iframe
    Example:

    <iframe src="https://azareeljames.github.io/Robot-Test/" frameborder="3" title="Robot Test" id="robotTest"></iframe>

# 2. Add script code
    // script.js

    window.addEventListener("message", e => {
        if(e.data["Robot Test Passed"]){
            // Whenever it passed: you should hide the iframe.

            const robotTest = document.getElementById("robotTest");
            robotTest.hidden = true;

            window.open("https://google.com"); // opens google
        }
    });

# Tip:
    Not all robots can't solve it.
    ChatGPT can solve Captcha and Robot Test.