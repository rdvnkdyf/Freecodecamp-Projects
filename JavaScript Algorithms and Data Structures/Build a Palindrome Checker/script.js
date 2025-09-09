const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

        // This function checks if a string is a palindrome.
function isPalindrome(str) {
            // Remove all non-alphanumeric characters and convert to lowercase.
            const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
            // Reverse the processed string.
            const reversedStr = alphanumericStr.split('').reverse().join('');
            // Check if the original processed string is the same as the reversed one.
            return alphanumericStr === reversedStr;
}

        // Add a click event listener to the "Check" button.
checkBtn.addEventListener('click', () => {
            const inputValue = textInput.value;
            resultDiv.classList.add('hidden'); // Hide previous results

            // Handle the case of an empty input with a native alert, as required by the test suite.
            if (inputValue.trim() === '') {
                alert('Please input a value.');
                return;
            }

            // Check if the input is a palindrome.
            const isItPalindrome = isPalindrome(inputValue);

            // Construct the result message without quotes.
            let message = `${inputValue} is a palindrome.`;
            let bgColor = 'bg-green-100';
            let textColor = 'text-green-700';

            if (!isItPalindrome) {
                message = `${inputValue} is not a palindrome.`;
                bgColor = 'bg-yellow-100';
                textColor = 'text-yellow-700';
            }

            // Update the result div with the message and styling.
            resultDiv.textContent = message;
            resultDiv.className = `message-box ${bgColor} ${textColor}`;
            resultDiv.classList.remove('hidden');
});

        // Add an event listener for the 'Enter' key on the input field.
textInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                checkBtn.click();
            }
        });