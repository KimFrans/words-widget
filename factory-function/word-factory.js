function WordWidget() {
    const lastEnteredSentenceArray = []

    function addSentence(sentence) {
        if (lastEnteredSentenceArray.length < 5) {
            if (!lastEnteredSentenceArray.includes(sentence)) {
                lastEnteredSentenceArray.push({ sentence: sentence })

            }
        }
        else {
            lastEnteredSentenceArray.shift()
            if (!lastEnteredSentenceArray.includes(sentence)) {
                lastEnteredSentenceArray.push({ sentence: sentence })
                // console.log(lastEnteredSentenceArray);
            }
        }

        // return lastEnteredSentenceArray
    }

    function getSentence() {

        // let averageOfSentence = sentence.split(' ')

        // words.split(" ").reduce((a, b) => a + b.length, 0)/words.split( " " ).length
        const sentenceInputAvg = sentence
        const averageInput = sentence.split(" ").reduce((a, b) => a + b.length, 0) / sentence.split(" ").length
        // console.log(averageInput);
        const stringArray = lastEnteredSentenceArray.toString()
        // console.log(stringArray);
        const average = stringArray.split(" ").reduce((a, b) => a + b.length, 0) / stringArray.split(" ").length
        const round = average.toFixed(2)
        console.log(round);



        if (averageWordLength > averageWord) {
            console.log("green");
            dot.classList.remove("orange");
            dot.classList.add("green");
        }
        else if (averageWordLength < averageWord) {
            console.log("orange");
            dot.classList.remove("green");
            dot.classList.add("orange");
        }

    }

    return {
        addSentence,
        getSentence
    }
}