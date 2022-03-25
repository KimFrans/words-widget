function WordWidget() {
    let wordsArray = []
    let lastEnteredSentenceArray = []
    let newSentence = ""
    let joinedArray = ""
    // wordsArray = sentence.trim().split(" ");
    function highlight(sentence, sliderValue) {

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
    }

    function highlishtedSentence() {
        return newSentence
    }

    function wordCount(sentence) {
        //word Count display
        let wordCount = sentence.split(" ").length
        return wordCount
        // console.log(wordCount);
        // count.innerHTML = wordCount
    }

    function longestWordInSentence(sentence) {
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

        return `<markLongest>${longestWordArray}</markLongest>`
        // console.log(longestWordArray);

        // longest.innerHTML = `<markLongest>${longestWordArray}</markLongest>`
    }

    function checkedBox(sentence) {
        wordsArray = sentence.trim().split(" ");
        const wordsLongerThan5 = wordsArray.map(word => {
            if (word.length >= 5) {
                return `<mark>${word}</mark>`
            }
            
        })
        let joinedArray = wordsLongerThan5.join(" ")
        return joinedArray
        
    }

    function checkBoxResults() {
        return joinedArray
    }

    function longerThan5Results(){
        return wordsLongerThan5
    }

    function last5sentences(sentence) {
        if (lastEnteredSentenceArray.length < 5) {
            if (!lastEnteredSentenceArray.includes(sentence)) {
                lastEnteredSentenceArray.push(sentence)
                // localStorage.setItem('lastSentences', JSON.stringify(lastEnteredSentenceArray))
                for (i = 0; i < lastEnteredSentenceArray.length; i++) {
                    var nodeExample = document.createElement("li")
                    var textNode = document.createTextNode(lastEnteredSentenceArray[i])
                    nodeExample.appendChild(textNode)
                }

            }
        }
        else {
            lastEnteredSentenceArray.shift()
            if (!lastEnteredSentenceArray.includes(sentence)) {
                lastEnteredSentenceArray.push(sentence)
                // localStorage.setItem('lastSentences', JSON.stringify(lastEnteredSentenceArray))
                console.log(lastEnteredSentenceArray);
                for (i = 0; i < lastEnteredSentenceArray.length; i++) {
                    var nodeExample = document.createElement("li")
                    var textNode = document.createTextNode(lastEnteredSentenceArray[i])
                    nodeExample.appendChild(textNode)
                }
            }
        }
    }

    function dotClasses(sentence) {
        const averageInput = sentence.split(" ").reduce((a, b) => a + b.length, 0) / sentence.split(" ").length
        // const averageRound = averageInput.toFixed(2)
        // console.log(averageInput);
        const stringArray = lastEnteredSentenceArray.toString()
        // console.log(stringArray);
        const average = stringArray.split(" ").reduce((a, b) => a + b.length, 0) / stringArray.split(" ").length
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
    }

    function SentenceArray(){
        return lastEnteredSentenceArray
    }

    return {
        highlight,
        wordCount,
        longestWordInSentence,
        last5sentences,
        dotClasses,
        highlishtedSentence,
        checkedBox,
        checkBoxResults,
        longerThan5Results,
        SentenceArray
    }
}