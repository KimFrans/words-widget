const getSentence = document.querySelector(".input");
const analyseBtn = document.querySelector(".analyse");
const display = document.querySelector(".sentenceDisplay");
const count = document.querySelector(".count");
const checkBox = document.querySelector(".hide");
const longerThan5 = document.querySelector(".longerThan5")
const lessthan5 = document.querySelector(".lessthan5")
const displaySentence = document.querySelector(".last5sentences");
const displayList = document.getElementById("display5");
const dot = document.querySelector(".dot")
const error = document.querySelector(".error")
let wordsArray = []
let lastEnteredSentenceArray = []

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

if (localStorage['lastSentences']) {
    lastEnteredSentenceArray = JSON.parse(localStorage.getItem('lastSentences'))
    console.log("got Local storage");
}
for (i = 0; i < lastEnteredSentenceArray.length; i++) {
    var nodeExample = document.createElement("li")
    var textNode = document.createTextNode(lastEnteredSentenceArray[i])
    nodeExample.appendChild(textNode)
}
document.getElementById("display5").innerHTML = lastEnteredSentenceArray.map(i => `<li>${i}</li>`).join('');

// get a reference to the template script tag
var templateSource = document.querySelector(".templateName").innerHTML;
// compile the template
var userTemplate = Handlebars.compile(templateSource);


function getWords() {
    const sentence = getSentence.value
    const sliderValue = slider.value;
    // sliderValue = this.value;
    
    if(sentence != ""){
        wordsArray = sentence.trim().split(" ");

        let sentenceSplit = sentence.split(' ');
        let longestWord = 0;
        let longestInString = ""
        for (var i = 0; i < sentenceSplit.length; i++) {
            if (sentenceSplit[i].length > longestWord) {
                longestWord = sentenceSplit[i].length;
                longestInString = sentenceSplit[i];
            }
        }
        let longestWordArray = sentenceSplit.filter((word) => {
            return word.length == longestInString.length
        })
        console.log(longestWordArray);
        const highlightedSentence = wordsArray.map(word => {
            if(sliderValue != 0){
                if(word.length == longestInString.length){
                    { return `<markLongest>${word}</markLongest>` }
                }
                else {
                    if (word.length >= sliderValue) {
                        { return `<mark>${word}</mark>` }
                    }
                }
                return word
    
            }else{
                return `${word}`
            }
        })
        console.log(sliderValue);
        
    
        let newSentence = ""
        for (i = 0; i < highlightedSentence.length; i++) {
            newSentence += highlightedSentence[i] + " "
        }
    
        //word Count display
        let wordCount = sentence.split(" ").length
        // console.log(wordCount);
        count.innerHTML = wordCount
        
    
        //Checkbox
        if (checkBox.checked === true) {
            const wordsLongerThan5 = wordsArray.map(word => {
                if (word.length >= 5 && word.length == longestInString.length) {
                    return `<markLongest>${word}</markLongest>`
                }else if(word.length >= 5){
                   return  `<mark>${word}</mark>`
                }
    
            })
            let joinedArray = wordsLongerThan5.join(" ") 
            display.innerHTML = " "
            lessthan5.innerHTML = joinedArray
    
        } else {
            lessthan5.innerHTML = ""
            display.innerHTML = newSentence
        }
    
    
        //Keep track of the last 5 sentences enetred
        if (lastEnteredSentenceArray.length < 5) {
            if (!lastEnteredSentenceArray.includes(sentence)) {
                lastEnteredSentenceArray.push(sentence)
                localStorage.setItem('lastSentences', JSON.stringify(lastEnteredSentenceArray))
                for (i = 0; i < lastEnteredSentenceArray.length; i++) {
                    var nodeExample = document.createElement("li")
                    var textNode = document.createTextNode(lastEnteredSentenceArray[i])
                    nodeExample.appendChild(textNode)
                }
                document.getElementById("display5").appendChild(nodeExample)
            }
        }
        else {
            lastEnteredSentenceArray.shift()
            if (!lastEnteredSentenceArray.includes(sentence)) {
                lastEnteredSentenceArray.push(sentence)
                localStorage.setItem('lastSentences', JSON.stringify(lastEnteredSentenceArray))
                console.log(lastEnteredSentenceArray);
                for (i = 0; i < lastEnteredSentenceArray.length; i++) {
                    var nodeExample = document.createElement("li")
                    var textNode = document.createTextNode(lastEnteredSentenceArray[i])
                    nodeExample.appendChild(textNode)
                }
                document.getElementById("display5").innerHTML = lastEnteredSentenceArray.map(i => `<li>${i}</li>`).join('');
            }
        }
    
        // console.log(lastEnteredSentenceArray);
        const averageInput = sentence.split(" ").reduce((a, b) => a + b.length, 0)/sentence.split(" ").length
        // const averageRound = averageInput.toFixed(2)
        // console.log(averageInput);
        const stringArray = lastEnteredSentenceArray.toString()
        // console.log(stringArray);
        const average = stringArray.split(" ").reduce((a, b) => a + b.length, 0)/stringArray.split(" ").length
        const round = average.toFixed(2)
        // console.log(round);
        
        if (averageInput > round) {
            console.log("green");
            dot.classList.remove("orange");
            dot.classList.add("green");
        }
        else if (averageInput < round) {
            console.log("orange");
            dot.classList.remove("green");
            dot.classList.add("orange");
        }

    }else{
        error.innerHTML = "Please enter a sentence!"
        setTimeout(function () {
            error.innerHTML = "";
        }, 3000);
    }
    
    
}
analyseBtn.addEventListener('click', getWords)


displayList.addEventListener('click', (event) => {
    getSentence.value = event.target.innerHTML;
    getWords()
    
});