const getSentence = document.querySelector(".input");
const analyseBtn = document.querySelector(".analyse");
const display = document.querySelector(".sentenceDisplay");


let wordsArray = []

function getWords() {

    const sentence = getSentence.value
    console.log(sentence);

    wordsArray = sentence.trim().split(" ");
    console.log(wordsArray);
    // return wordsArray
    const highlightedSentence = wordsArray.map( word => 
        { if(word.length > 4)
             {return `<mark>${word}</mark>` }
        })

    console.log(highlightedSentence);
    display.innerHTML = highlightedSentence
    

}
analyseBtn.addEventListener('click', getWords)


