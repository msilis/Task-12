let inputNumbers = [];

function handleClick(){

    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);
    let num4 = Number(document.getElementById('num4').value);
    let num5 = Number(document.getElementById('num5').value);
    let num6 = Number(document.getElementById('num6').value);
    let num7 = Number(document.getElementById('num7').value);
    let num8 = Number(document.getElementById('num8').value);
    let num9 = Number(document.getElementById('num9').value);
    let num10 = Number(document.getElementById('num10').value);
    
    inputNumbers.push(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);
    console.log(inputNumbers)
    document.getElementById('number-array').innerHTML = `The given list of numbers is: ${inputNumbers}`;

    //Sum of all numbers in array
    let sum = 0;
    for (const value of inputNumbers){
        sum += value;
    }
    console.log(sum);
    document.getElementById('total-numbers').innerHTML = `The total of the given numbers is: ${sum}`;

    //Maximum number in array
    console.log(Math.max(...inputNumbers))
    document.getElementById('max-number').innerHTML = `The bigest number in the list is at index: ${inputNumbers.indexOf(Math.max(...inputNumbers))}`

    //Minimum number in array
    console.log(Math.min(...inputNumbers))
    document.getElementById('min-number').innerHTML = `The smallest number in the list is at index: ${inputNumbers.indexOf(Math.min(...inputNumbers))}`

    //Average of numbers
    let average = sum / inputNumbers.length;
    console.log(Math.round(average.toFixed(2)));
    document.getElementById('avg-number').innerHTML = `The average of the numbers given is: ${Math.round(average.toFixed(2))}`

    //Find median number
    let sortedNumbers = inputNumbers.sort(function(a, b){return a-b});
    console.log(sortedNumbers);
    console.log(sortedNumbers[4]);
    document.getElementById('median-number').innerHTML = `The median number is: ${sortedNumbers[4]}`;
    
}

document.getElementById('submit-button').addEventListener('click', handleClick);