(function () {
    "use strict";

    let convertType = 'miles';

    const updateUI = () => {
        const title = convertType === 'miles' ? 
            'Miles To Kilometers Converter' : 
            'Kilometers To Miles Converter';
        
        const description = convertType === 'miles' ? 
            'Type in a number of Miles and click the button to convert the distance to Kilometers' : 
            'Type in a number of Kilometers and click the button to convert the distance to Miles';

        document.querySelector('h1').innerText = title;
        document.querySelector('p').innerText = description;
    };

    document.addEventListener('keydown', (evt) => {
        const key = evt.key.toLowerCase(); // Normalize key for easier comparison
        if (key === 'k') {
            convertType = 'kilometers';
            updateUI();
        } else if (key === 'm') {
            convertType = 'miles';
            updateUI();
        }
    });

    document.getElementById('convert').addEventListener('submit', (event) => {
        event.preventDefault();
        const distanceInput = document.getElementById('distance').value;
        const distance = parseFloat(distanceInput);

        if (!isNaN(distance)) { 
            const conversion = convertType === 'miles' 
                ? (distance * 1.609334).toFixed(2) 
                : (distance * 0.621371).toFixed(2);
                
            const unitConverted = convertType === 'miles' ? 'Kilometers' : 'Miles';
            const unitOriginal = convertType === 'miles' ? 'Miles' : 'Kilometers';

            document.getElementById('answer').innerHTML = `<h2>${distance} ${unitOriginal} converted into ${unitConverted} ${conversion}</h2>`;
        } else {
            document.getElementById('answer').innerText = 'Enter a valid number';
        }
    });
})();
