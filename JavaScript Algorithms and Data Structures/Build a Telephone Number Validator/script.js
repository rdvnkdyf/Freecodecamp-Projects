document.addEventListener('DOMContentLoaded', () => {
            const userInput = document.getElementById('user-input');
            const checkBtn = document.getElementById('check-btn');
            const clearBtn = document.getElementById('clear-btn');
            const resultsDiv = document.getElementById('results-div');

            // This function validates the phone number using a regular expression.
            function isValidUSNumber(str) {
                // This regex handles all valid US phone number formats as per the requirements.
                const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
                return regex.test(str);
            }

            // This function displays the result message in the results div.
            function displayResult(message, isValid) {
                resultsDiv.textContent = message;
                resultsDiv.classList.remove('hidden');
                if (isValid) {
                    resultsDiv.classList.add('bg-green-100', 'text-green-700');
                    resultsDiv.classList.remove('bg-red-100', 'text-red-700');
                } else {
                    resultsDiv.classList.add('bg-red-100', 'text-red-700');
                    resultsDiv.classList.remove('bg-green-100', 'text-green-700');
                }
            }

            // Event listener for the "Check" button.
            checkBtn.addEventListener('click', () => {
                const inputValue = userInput.value.trim();
                resultsDiv.classList.add('hidden'); // Hide previous results

                // Handle the case of an empty input with a native alert, as required by the test suite.
                if (inputValue === '') {
                    alert('Please provide a phone number');
                    return;
                }

                // Check if the input is a valid US phone number.
                const isValid = isValidUSNumber(inputValue);

                // Construct and display the result message.
                const message = `${isValid ? 'Valid' : 'Invalid'} US number: ${inputValue}`;
                displayResult(message, isValid);
            });

            // Event listener for the "Clear" button.
            clearBtn.addEventListener('click', () => {
                userInput.value = '';
                resultsDiv.textContent = '';
                resultsDiv.classList.add('hidden');
            });

            // Event listener for the 'Enter' key on the input field.
            userInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    checkBtn.click();
                }
            });
        });