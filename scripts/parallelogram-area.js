/** 
// console.log('connected');
function calculateParallelogramArea(){
    // console.log('calculate rect area');

    // get length of the parallelogram
    const lengthInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    // console.log(lengthText);
    console.log(base);

    // get width of the parallelogram
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    // calculate parallelogram area
    const area = base * height;
    console.log('area of the parallelogram:', area);

    // display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}
    */

// function calculateParallelogram() {
//     const base = getParallelogramBase();
//     console.log(base);
// }

// function getParallelogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }


function calculateParallelogramArea(){
    const base = getElementById('parallelogram-base');
    // console.log('base value', base);

    const height = getElementById('parallelogram-height');
    // console.log('height value', height);


    const area = base * height;
    console.log('area of the parallelogram is ', area);

    setInnerTextById('parallelogram.area', area);

}

function getElementById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    // console.log(inputField.value);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.Log(inputValue);
    return inputValue

}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}



