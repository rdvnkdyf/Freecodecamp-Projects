document.addEventListener('DOMContentLoaded', () => {
            const numberInput = document.getElementById('number');
            const convertBtn = document.getElementById('convert-btn');
            const outputDiv = document.getElementById('output');

            // This function converts an Arabic numeral to a Roman numeral.
            function convertToRoman(num) {
                const romanNumerals = [
                    { value: 1000, symbol: 'M' },
                    { value: 900, symbol: 'CM' },
                    { value: 500, symbol: 'D' },
                    { value: 400, symbol: 'CD' },
                    { value: 100, symbol: 'C' },
                    { value: 90, symbol: 'XC' },
                    { value: 50, symbol: 'L' },
                    { value: 40, symbol: 'XL' },
                    { value: 10, symbol: 'X' },
                    { value: 9, symbol: 'IX' },
                    { value: 5, symbol: 'V' },
                    { value: 4, symbol: 'IV' },
                    { value: 1, symbol: 'I' }
                ];

                let result = '';
                for (let i = 0; i < romanNumerals.length; i++) {
                    while (num >= romanNumerals[i].value) {
                        result += romanNumerals[i].symbol;
                        num -= romanNumerals[i].value;
                    }
                }
                return result;
}

            // This function handles displaying messages in the output div.
function displayMessage(message, type) {
                outputDiv.textContent = message;
                outputDiv.classList.remove('hidden');
                if (type === 'error') {
                    outputDiv.classList.add('bg-red-100', 'text-red-700');
                    outputDiv.classList.remove('bg-green-100', 'text-green-700');
                } else {
                    outputDiv.classList.add('bg-green-100', 'text-green-700');
                    outputDiv.classList.remove('bg-red-100', 'text-red-700');
                }
}

            // Event listener for the "Convert" button.
convertBtn.addEventListener('click', () => {
                const inputValue = numberInput.value;
                outputDiv.classList.add('hidden'); // Hide previous results

                // Check if the input is empty.
                if (inputValue.trim() === '') {
                    displayMessage('Please enter a valid number', 'error');
                    return;
                }

                const number = parseInt(inputValue, 10);

                // Check if the number is within the valid range.
                if (number < 1) {
                    displayMessage('Please enter a number greater than or equal to 1', 'error');
                } else if (number > 3999) {
                    displayMessage('Please enter a number less than or equal to 3999', 'error');
                } else {
                    // If the number is valid, convert it and display the result.
                    const roman = convertToRoman(number);
                    displayMessage(roman, 'success');
                }
});

            // Event listener for the 'Enter' key on the input field.
numberInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    convertBtn.click();
                }
            });
        });