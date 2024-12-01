/**
 * objective: get base, height of a triangle. Calculate the area by using the provided formula and then display the area.
 * step-1: added base value of the triangle
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the field
 * step-4: get value from the input field. (value is string now)
 * step-5: convert the value to a number. use parseFloat 
 */


// console.log('connected');
function calculateTriangleArea(){
    // get string base value
    // console.log('inside function');
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
     console.log( typeof triangleBaseText);
    //  console.log( base);

    // get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = perseFloat(triangleHeightText);
    // console.log(triangleHeightInput);
    console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
    
}
    


// // console.log('rect connected');
// function calculateTriangleArea(){
//     // get string base value
//     // console.log('inside function');
//     const triangleBaseInput = document.getElementById('triangle-base');
//     const triangleBaseText = triangleBaseInput.value;
//      console.log( typeof triangleBaseText);
//     //  console.log( base);

//    // get triangle height
//    const triangleHeightInput = document.getElementById('triangle-height');
//    const triangleHeightText = triangleHeightInput.value;
//    const height = perseFloat(triangleHeightText);
//    // console.log(triangleHeightInput);
//    console.log(height);

//   // calculate triangle area
//   const area = 0.5 * base * height;
//   console.log('area of the triangle is:', area);

//     // display rectangle area
//     const triangleAreaSpan = document.getElementById('triangle-area');
//     triangleAreaSpan.innerText = area;
// }