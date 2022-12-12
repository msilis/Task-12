

function clickHandler(){
    let inputWord = document.getElementById('word-input').value;

    //Every second letter is !
    
    for (let i = 1; i < inputWord.length; i+=2){
        console.log(inputWord.replace('e', '!'));
    }
    console.log('button clicked');
    console.log(inputWord);
    

    //Word is reversed

    //Every 6th letter is uppercaase

    //Array of ASCII values

}

document.getElementById('submit-button').addEventListener('click', clickHandler);