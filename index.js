const getSentence = document.querySelector(".input");
const analyseBtn = document.querySelector(".analyse");
const display = document.querySelector(".sentenceDisplay");
const longest = document.querySelector(".longestWord")
const count = document.querySelector(".count");
const checkBox = document.querySelector(".hide");
const longerThan5 = document.querySelector(".longerThan5")
const lessthan5 = document.querySelector(".lessthan5")

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

    var sentenceSplit = sentence.split(' ');
  var longestWord = 0;
  let longestInString = ""
  for(var i = 0; i < sentenceSplit.length; i++){
    if(sentenceSplit[i].length > longestWord){
	longestWord = sentenceSplit[i].length;
    longestInString =  sentenceSplit[i]
     }
  }

  console.log(longestInString);
  longest.innerHTML = longestInString
  return longestInString;


    
}
analyseBtn.addEventListener('click', getWords)

function hideWords(){
    const sentence = getSentence.value
    // console.log(sentence);

    wordsArray = sentence.trim().split(" ");

    if(checkBox.checked === true){
        const wordsLongerThan5 = wordsArray.map(word => {
            if (word.length > 5) {
                return word
            }
            
        })
        let joinedArray = wordsLongerThan5.join(" ")
        lessthan5.innerHTML = joinedArray 
    
    }else {
        lessthan5.innerHTML = ""
    }

}
checkBox.addEventListener('click', hideWords)

