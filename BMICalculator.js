const form = document.querySelector('form');

form.addEventListener('submit', function (e) {

    console.log(e);

    e.preventDefault();


    const height = parseInt(document.querySelector('#height').value);
    console.log(height);
    const weight = parseInt(document.querySelector('#weight').value);
    console.log(weight);
    const results = document.querySelector('#results');
    const element = document.createElement('button');
    element.innerHTML = `<div></div>`;
    if (height < 0 || height === '' || height === isNaN()) {
        document.querySelector('button').style.display = "none";
        results.innerHTML = "Enter a valid height";


    }

    else if (weight < 0 || weight === '' || weight === isNaN()) {
        document.querySelector('button').style.display = "none";
        results.innerHTML = "Enter a valid weight";


    }
    else {
        document.querySelector('button').style.display = "none";
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Bmi is ${bmi}</span>`;





    }






})