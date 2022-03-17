const getSentence = document.querySelector(".input");
const analyseBtn = document.querySelector(".analyse");
const display = document.querySelector(".sentenceDisplay");
const longest = document.querySelector(".longestWord")
const count = document.querySelector(".count");
const checkBox = document.querySelector(".hide");
const longerThan5 = document.querySelector(".longerThan5")
const lessthan5 = document.querySelector(".lessthan5")
const displaySentence = document.querySelector(".last5sentences");

// get a reference to the template script tag
var templateSource = document.querySelector(".templateName").innerHTML;
// compile the template
var userTemplate = Handlebars.compile(templateSource);

let wordsArray = []
let lastEnteredSentenceArray = []

function getWords() {
    const sentence = getSentence.value

    wordsArray = sentence.trim().split(" ");
    const highlightedSentence = wordsArray.map(word => {
        if (word.length > 4) 
        { return `<mark>${word}</mark>` }
            return word 
    })
    // console.log(highlightedSentence);
    
    let newSentence = ""
    for(i=0; i<highlightedSentence.length; i++){
        newSentence+= highlightedSentence[i] + " " 
    }
    
    //word Count display
    let wordCount = sentence.split(" ").length
    // console.log(wordCount);
    count.innerHTML = wordCount

    //Longest word
    let sentenceSplit = sentence.split(' ');
    let longestWord = 0;
    let longestInString = ""
    for(var i = 0; i < sentenceSplit.length; i++){
        if(sentenceSplit[i].length > longestWord){
	        longestWord = sentenceSplit[i].length;
            longestInString = sentenceSplit[i];
        }
    }
    // longest.innerHTML = `<markLongest>${longestInString}</markLongest>`;
    let longestWordArray = sentenceSplit.filter( (word) => {
        return word.length == longestInString.length
    })
    console.log(longestWordArray);
    // let highlightedLong = ""
    // for(i=0; i<longestWordArray.length; i++){
    //     highlightedLong+= longestWordArray[i] + " " 
    // }
    // longest.innerHTML = `<markLongest>${highlightedLong}</markLongest>`
    longest.innerHTML = `<markLongest>${longestWordArray}</markLongest>`

    
    //Checkbox
    if(checkBox.checked === true){
        const wordsLongerThan5 = wordsArray.map(word => {
            if (word.length >= 5) {
                return `<mark>${word}</mark>` 
            }
            // return word
            
        })
        let joinedArray = wordsLongerThan5.join(" ")
        // lessthan5.innerHTML = joinedArray 
        display.innerHTML = " "
        lessthan5.innerHTML = joinedArray
    
    }else {
        lessthan5.innerHTML = ""
        display.innerHTML = newSentence
    }

    //Keep track of the last 5 sentences enetred
    if(lastEnteredSentenceArray.length < 5){
        if(!lastEnteredSentenceArray.includes(sentence)){
            lastEnteredSentenceArray.push(sentence)
        }
    }else{
        lastEnteredSentenceArray.shift()
        // return lastEnteredSentenceArray
    }
    console.log(lastEnteredSentenceArray);
    // displaySentence.innerHTML = userTemplate({sentence: lastEnteredSentenceArray})
    displaySentence.innerHTML = `${lastEnteredSentenceArray} `

    
}
analyseBtn.addEventListener('click', getWords)

// function hideWords(){
//     const sentence = getSentence.value
//     // console.log(sentence);

//     wordsArray = sentence.trim().split(" ");

//     if(checkBox.checked === true){
//         const wordsLongerThan5 = wordsArray.map(word => {
//             if (word.length > 5) {
//                 return word
//             }
            
//         })
//         let joinedArray = wordsLongerThan5.join(" ")
//         // lessthan5.innerHTML = joinedArray 
//         display.innerHTML = joinedArray
    
//     }else {
//         // lessthan5.innerHTML = ""
//         display.innerHTML = ""
//     }

// }
// checkBox.addEventListener('click', hideWords)

