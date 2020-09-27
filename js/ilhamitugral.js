var texts = ['Full-Stack Webmaster', 'IT @ Government in Turkey', 'A bit of Cyber-Security Staff', 'Unity Game Developer', 'Expert Level Windows User'];
var currentIndex = 4;
var textArea = document.querySelector('span.ilhamitugral-brand-description');
var timerCount = 200;
var typeStatus = 0;
var textLength = texts[currentIndex].length;

function ReTypeBrand() {
    if(currentIndex > -1) {
        switch(typeStatus) {
            case 0:
                if(textArea.innerText.length != 0) {
                    textArea.innerText = textArea.innerText.substr(0, textArea.innerText.length-1);
                }else {
                    textArea.innerText = ' ';
                    currentIndex = Math.floor(Math.random() * texts.length);
                    textLength = 0;
                    typeStatus = 1;
                }
            break;

            case 1:
                if(textArea.innerText != texts[currentIndex]) {
                    textLength++;
                    textArea.innerText = texts[currentIndex].substr(0, textLength);
                }else {
                    typeStatus = 0;
                }
            break;
        }
    }
}

var timer = setInterval(function() {
    ReTypeBrand();
}, timerCount);