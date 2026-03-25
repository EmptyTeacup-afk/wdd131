console.log("Monster Hunter JS Loaded!");

const monsterData = {
    dragon: { name: "Dragon", class: "Fire", level: 10, health: 500, img: "images/Dragon_MonsterFighter.png",attack: 120 },
    golem: { name: "Golem", class: "Earth", level: 8, health: 700, img: "images/Golem_MonsterFighter.png", attack: 60},
    griffen: { name: "Griffen", class: "Air", level: 7, health: 400, img: "images/Griffen_MonsterFighter.png", attack:80},
    hydra: { name: "Hydra", class: "Water", level: 12, health: 600, img: "images/Hydra_MonsterFighter.png", attack: 100 },
    kraken: { name: "Kraken", class: "Water", level: 15, health: 800, img: "images/Kraken_MonsterFighter.png", attack: 90}
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
        document.getElementById(`p${playerNum}-health`).textContent = monster.health;
        document.getElementById(`p${playerNum}-attack`).textContent = monster.attack;
        
        // Update Image
        const imgEl = document.querySelector(`#p${playerNum}-card .image`);
        imgEl.src = monster.img;
        imgEl.alt = monster.name;
    }
}

// Function to handle the attack logic
function dealDamage(attackerNum) {
    // Determine who is attacking and who is being hit
    const targetNum = (attackerNum === 1) ? 2 : 1;

    // Get the attacker's power and target's current health from the HTML
    const attackPower = parseInt(document.getElementById(`p${attackerNum}-attack`).textContent);
    const targetHealthEl = document.getElementById(`p${targetNum}-health`);
    let targetHealth = parseInt(targetHealthEl.textContent);

    // Subtract health
    targetHealth = targetHealth - attackPower;

    // Prevent negative health and check for win
    if (targetHealth <= 0) {
        targetHealth = 0;
        alert(`${document.getElementById(`p${attackerNum}-name`).textContent} Wins!`);
    }

    // Update the target's health on the screen
    targetHealthEl.textContent = targetHealth;
}

// Function to handle healing logic
function healMonster(healNum) {
    //determine who is healing
    const targetNum = (healNum === 1) ? 1 : 2;

    // Get current health value
    const targetHealthEl = document.getElementById(`p${targetNum}-health`);
    let targetHealth = parseInt(targetHealthEl.textContent);

    // Math on healing
    targetHealth = targetHealth + 20;

    //Update health value
    targetHealthEl.textContent = targetHealth
}

// Wait for the window to load to ensure elements exist
window.onload = () => {
    const select1 = document.getElementById('player-one-select');
    const select2 = document.getElementById('player-two-select');

    if (select1 && select2) {
        select1.addEventListener('change', () => updateMonster(1));
        select2.addEventListener('change', () => updateMonster(2));

    // Link the buttons to the attack logic
    const p1AttackBtn = document.querySelector('#p1-card .attack-btn');
    const p2AttackBtn = document.querySelector('#p2-card .attack-btn');

    p1AttackBtn.addEventListener('click', () => dealDamage(1));
    p2AttackBtn.addEventListener('click', () => dealDamage(2));

    // Link the buttons to the heal logic
    const p1HealBtn = document.querySelector('#p1-card .heal-btn');
    const p2HealBtn = document.querySelector('#p2-card .heal-btn');

    p1HealBtn.addEventListener('click', () => healMonster(1));
    p2HealBtn.addEventListener('click', () => healMonster(2));

    // Set initial state
        updateMonster(1);
        updateMonster(2);
    } else {
        console.error("Could not find select elements! Check your HTML IDs.");
    }
};