document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('search-input');
            const searchButton = document.getElementById('search-button');
            const creatureCard = document.getElementById('creature-card');
            const creatureName = document.getElementById('creature-name');
            const creatureId = document.getElementById('creature-id');
            const weight = document.getElementById('weight');
            const height = document.getElementById('height');
            const types = document.getElementById('types');
            const hp = document.getElementById('hp');
            const attack = document.getElementById('attack');
            const defense = document.getElementById('defense');
            const specialAttack = document.getElementById('special-attack');
            const specialDefense = document.getElementById('special-defense');
            const speed = document.getElementById('speed');
            const creatureImg = document.getElementById('creature-img');

            const API_URL = 'https://rpg-creature-search-app.freecodecamp.rocks/api/creature';

            // Function to fetch creature data from the API.
            const fetchCreature = async (query) => {
                try {
                    // Check if the input is a number (ID) or a string (name).
                    const isId = !isNaN(parseInt(query)) && !isNaN(parseFloat(query));
                    const endpoint = isId ? `${API_URL}/${query}` : `${API_URL}/${query.toLowerCase()}`;
                    
                    const response = await fetch(endpoint);
                    
                    // If the response is not ok, it means the creature was not found.
                    if (!response.ok) {
                        throw new Error("Creature not found");
                    }

                    const data = await response.json();
                    displayCreatureData(data);
                } catch (error) {
                    // Display an alert for any error, including "Creature not found".
                    alert("Creature not found");
                    creatureCard.classList.add('hidden');
                }
            };

            // Function to display the fetched data on the UI.
            const displayCreatureData = (data) => {
                creatureCard.classList.remove('hidden');

                creatureName.textContent = data.name.toUpperCase();
                creatureId.textContent = `#${data.id}`;
                weight.textContent = `Weight: ${data.weight}`;
                height.textContent = `Height: ${data.height}`;
                hp.textContent = `HP: ${data.stats[0].base_stat}`;
                attack.textContent = `Attack: ${data.stats[1].base_stat}`;
                defense.textContent = `Defense: ${data.stats[2].base_stat}`;
                specialAttack.textContent = `Special Attack: ${data.stats[3].base_stat}`;
                specialDefense.textContent = `Special Defense: ${data.stats[4].base_stat}`;
                speed.textContent = `Speed: ${data.stats[5].base_stat}`;
                
                // Clear previous types and add new ones.
                types.innerHTML = '';
                data.types.forEach(typeInfo => {
                    const typeSpan = document.createElement('span');
                    typeSpan.textContent = typeInfo.type.name.toUpperCase();
                    typeSpan.className = 'bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full uppercase';
                    types.appendChild(typeSpan);
                });

                // Set creature image URL.
                creatureImg.src = `https://rpg-creature-search-app.freecodecamp.rocks/api/creature/images/${data.name.toLowerCase()}.png`;
            };

            // Event listener for the search button.
            searchButton.addEventListener('click', () => {
                const query = searchInput.value.trim();
                // If the input is empty, show "Creature not found" alert as per other invalid cases.
                if (query === '') {
                    alert("Creature not found");
                    creatureCard.classList.add('hidden');
                    return;
                }
                fetchCreature(query);
            });

            // Event listener for pressing 'Enter' in the input field.
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    searchButton.click();
                }
            });
        });