 // Global variables as required by the tests.
        let price = 19.5;
        let cid = [
            ["PENNY", 0.5],
            ["NICKEL", 0],
            ["DIME", 0],
            ["QUARTER", 0],
            ["ONE", 0],
            ["FIVE", 0],
            ["TEN", 0],
            ["TWENTY", 0],
            ["ONE HUNDRED", 0]
        ];

        const currencyValues = {
            "PENNY": 0.01,
            "NICKEL": 0.05,
            "DIME": 0.1,
            "QUARTER": 0.25,
            "ONE": 1,
            "FIVE": 5,
            "TEN": 10,
            "TWENTY": 20,
            "ONE HUNDRED": 100
        };

        const cashInput = document.getElementById('cash');
        const purchaseBtn = document.getElementById('purchase-btn');
        const changeDueDiv = document.getElementById('change-due');
        const priceDisplay = document.getElementById('price-display');
        const cidDisplay = document.getElementById('cid-display');

        // Function to display CID and price on the page
        function updateDisplay() {
            priceDisplay.textContent = `$${price.toFixed(2)}`;
            cidDisplay.innerHTML = '';
            cid.forEach(item => {
                const [currency, amount] = item;
                const div = document.createElement('div');
                div.className = 'cid-display-item';
                div.innerHTML = `<span class="font-medium">${currency}:</span> <span>$${amount.toFixed(2)}</span>`;
                cidDisplay.appendChild(div);
            });
        }

        // Function to handle displaying messages
        function displayMessage(message, type) {
            changeDueDiv.textContent = message;
            changeDueDiv.classList.remove('hidden');
            if (type === 'error') {
                changeDueDiv.classList.add('bg-red-100', 'text-red-700');
                changeDueDiv.classList.remove('bg-green-100', 'text-green-700');
            } else {
                changeDueDiv.classList.add('bg-green-100', 'text-green-700');
                changeDueDiv.classList.remove('bg-red-100', 'text-red-700');
            }
        }

        // Purchase button event listener
        purchaseBtn.addEventListener('click', () => {
            const cash = parseFloat(cashInput.value);

            // Handle insufficient cash alert
            if (cash < price) {
                alert("Customer does not have enough money to purchase the item");
                return;
            }

            // Handle exact payment
            if (cash === price) {
                displayMessage("No change due - customer paid with exact cash", 'success');
                return;
            }

            // Calculate change due and total CID
            let changeDue = cash - price;
            let totalCid = parseFloat(cid.reduce((sum, [, amount]) => sum + amount, 0).toFixed(2));
            let changeGiven = [];

            // INSUFFICIENT_FUNDS if total CID is less than change due
            if (totalCid < changeDue) {
                displayMessage("Status: INSUFFICIENT_FUNDS", 'error');
                return;
            }

            // CLOSED if total CID is exactly equal to change due
            if (totalCid.toFixed(2) === changeDue.toFixed(2)) {
                let closedChange = [];
                cid.slice().reverse().forEach(([currency, amount]) => {
                    if (amount > 0) {
                        closedChange.push(`${currency}: $${amount}`);
                    }
                });
                displayMessage(`Status: CLOSED ${closedChange.join(' ')}`, 'success');
                return;
            }
            
            // Calculate change for OPEN status
            const reversedCid = cid.slice().reverse();
            for (let i = 0; i < reversedCid.length; i++) {
                let currencyName = reversedCid[i][0];
                let currencyAmount = reversedCid[i][1];
                let currencyValue = currencyValues[currencyName];

                let count = 0;
                let amountToGive = 0;

                while (changeDue >= currencyValue && currencyAmount > 0) {
                    changeDue -= currencyValue;
                    changeDue = parseFloat(changeDue.toFixed(2));
                    currencyAmount -= currencyValue;
                    amountToGive += currencyValue;
                    count++;
                }

                if (amountToGive > 0) {
                    changeGiven.push([currencyName, amountToGive]);
                }
            }

            // If change is not exactly 0 after iteration, it means we couldn't give exact change.
            if (changeDue > 0) {
                displayMessage("Status: INSUFFICIENT_FUNDS", 'error');
            } else {
                const changeString = changeGiven.map(([name, amount]) => `${name}: $${amount}`).join(' ');
                displayMessage(`Status: OPEN ${changeString}`, 'success');
            }
        });

        // Initial display update
        updateDisplay();