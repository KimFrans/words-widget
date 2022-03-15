const getSentence = document.querySelector(".input");
const analyseBtn = document.querySelector(".analyse");
const display = document.querySelector(".sentenceDisplay");
const count = document.querySelector(".count")

let wordsArray = []

function getWords() {

    const sentence = getSentence.value
    console.log(sentence);

    wordsArray = sentence.trim().split(" ");
    // console.log(wordsArray);
    // return wordsArray
    const highlightedSentence = wordsArray.map(word => {
        if (word.length > 4) 
        { return `<mark>${word}</mark>` }
        
            return word 
        
    })

    console.log(highlightedSentence);
    
    let newSentence = ""
    for(i=0; i<highlightedSentence.length; i++){
        newSentence+= highlightedSentence[i] + " "
    }
    display.innerHTML = newSentence

    let wordCount = sentence.split(" ").length
    // console.log(wordCount);
    count.innerHTML = wordCount
}
analyseBtn.addEventListener('click', getWords)

