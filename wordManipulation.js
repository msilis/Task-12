

function clickHandler(){
    let inputWord = document.getElementById('word-input').value;

    //Every second letter is !
    let splitWord = inputWord.split("");
    let manipulatedWord = splitWord;
    console.log(splitWord);
    for (let i = 1; i < manipulatedWord.length; i+=2){
        manipulatedWord.splice(i, 1, '!');
    }
    let joinedWord = splitWord.join('');
    console.log(joinedWord)
    document.getElementById('bullet1').innerHTML = `1. ${inputWord} ------> ${joinedWord}`
    
    //Word is reversed

    let reversedWordArray = inputWord.split('').reverse();
    let reversedWord = reversedWordArray.join('');
    console.log(reversedWord);
    document.getElementById('bullet2').innerHTML = `2. ${inputWord} ------> ${reversedWord}`

    //Every 6th letter is uppercaase
    let upperCaseWord = inputWord.split("");
     for (let i=5; i<upperCaseWord.length; i+=6){
        upperCaseWord[i] = upperCaseWord[i].toUpperCase();
     }
    console.log(upperCaseWord.join(''))
    document.getElementById('bullet3').innerHTML = `3. ${inputWord} ------> ${upperCaseWord.join('')}`


    //Array of ASCII values

    let charCodeWord = inputWord.split("");
    for (let i=0; i<charCodeWord.length; i++){
        charCodeWord[i] = charCodeWord[i].charCodeAt();
        
    }
    console.log(charCodeWord);
    document.getElementById('bullet4').innerHTML = `3. ${inputWord} ------> ${charCodeWord}`

}

document.getElementById('submit-button').addEventListener('click', clickHandler);