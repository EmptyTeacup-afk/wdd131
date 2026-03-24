console.log("Monster Hunter JS Loaded!");

const monsterData = {
    dragon: { name: "Dragon", class: "Fire", level: 10, health: 500, img: "images/Dragon_MonsterFighter.png" },
    golem: { name: "Golem", class: "Earth", level: 8, health: 700, img: "images/Golem_MonsterFighter.png" },
    griffen: { name: "Griffen", class: "Air", level: 7, health: 400, img: "images/Griffen_MonsterFighter.png" },
    hydra: { name: "Hydra", class: "Water", level: 12, health: 600, img: "images/Hydra_MonsterFighter.png" },
    kraken: { name: "Kraken", class: "Water", level: 15, health: 800, img: "images/Kraken_MonsterFighter.png" }
};

function updateMonster(playerNum) {
    // Map number to the word used in the HTML ID
    const playerWord = (playerNum === 1) ? 'one' : 'two';
    const selection = document.getElementById(`player-${playerWord}-select`).value;
    const monster = monsterData[selection];

    if (monster) {
        // Update Text
        document.getElementById(`p${playerNum}-name`).textContent = monster.name;
        document.getElementById(`p${playerNum}-class`).textContent = monster.class;
        document.getElementById(`p${playerNum}-level`).textContent = monster.level;
        document.getElementById(`p${playerNum}-health`).textContent = monster.health;
        
        // Update Image
        const imgEl = document.querySelector(`#p${playerNum}-card .image`);
        imgEl.src = monster.img;
        imgEl.alt = monster.name;
    }
}

// Wait for the window to load to ensure elements exist
window.onload = () => {
    const select1 = document.getElementById('player-one-select');
    const select2 = document.getElementById('player-two-select');

    if (select1 && select2) {
        select1.addEventListener('change', () => updateMonster(1));
        select2.addEventListener('change', () => updateMonster(2));

        // Set initial state
        updateMonster(1);
        updateMonster(2);
    } else {
        console.error("Could not find select elements! Check your HTML IDs.");
    }
};