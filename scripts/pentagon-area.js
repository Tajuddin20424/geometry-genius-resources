/** 
// console.log('connect');
function calculatePentagonArea(){
    // console.log('calculate rect area');

    // get length of the Pentagon
    const lengthInput = document.getElementById('pentagon-perimeter');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    // console.log(lengthText);
    console.log(length);

    // get width of the pentagon
    const widthInput = document.getElementById('pentagon-apothem');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // calculate pentagon area
    const area = length * width;
    console.log('area of the pentagon:', area);

    // display pentagon area
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;
}

*/


function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    // console.log(perimeter);
    const apothem = getInputValueById('pentagon-apothem');
    console.log(perimeter, apothem);

    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area', area);

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    constInputValueText = inputField.value;
    const value = parseFloat(InputValueText);
    return value;

}

function setInnerTextById(element, area){
    const element = document.getElementById(element);
    element,element.inner = area;

}

