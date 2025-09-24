const degreesInput = document.getElementById('degrees');
const typeSelect = document.getElementById('type');
const convertBtn = document.getElementById('convert-btn');
const resultDisplay = document.getElementById('result');

function convertTemperature() {
    const degrees = parseFloat(degreesInput.value);
    const type = typeSelect.value;

    if (isNaN(degrees)) {
        resultDisplay.textContent = 'Please enter a valid number';
        return;
    }

    let convertedTemp;
    let resultUnit;

    if (type === 'fahrenheit') {
        convertedTemp = (degrees - 32) * (5 / 9);
        resultUnit = '°C';
    } else if (type === 'celsius') {
        convertedTemp = (degrees * 9 / 5) + 32;
        resultUnit = '°F';
    }

    resultDisplay.textContent = `${convertedTemp.toFixed(4)} ${resultUnit}`;
}

convertBtn.addEventListener('click', convertTemperature);

degreesInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        convertTemperature();
    }
});