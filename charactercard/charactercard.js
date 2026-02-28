const character ={
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 0,
    health: 100,
    attack: function() {
        document.querySelector("#attacked").addEventListener("click", function() {
            character.health -= 20;

            if (character.health <= 0) {
                character.health = 0;
            }    
            renderStats(character);

            if (character.health === 0) {
                setTimeout(function() { //add timeout to allow the health to update before alert
                alert(`${character.name} has been defeated!`);
                document.querySelector("#attacked").disabled = true;
                document.querySelector("#levelUp").disabled = true;
                document.querySelector("#attacked").style.backgroundColor = "gray";
                document.querySelector("#levelUp").style.backgroundColor = "gray";
                }, 50);
            }
        })
    },
    levelUp: function() {
        document.querySelector("#levelUp").addEventListener("click", function() {
            character.level += 1;
            renderStats(character);
        })
    }
};

document.querySelector('.name').textContent = character.name;

function statsTemplate(section) {
    return `
    <p>Class: ${character.class}</p>
    <p>Level: ${character.level}</p>
    <p>Health: ${character.health}</p>`
}   

function renderStats(sections) {
    const statsContainer = document.querySelector('.stats');
    statsContainer.innerHTML = statsTemplate(sections);
}

character.attack();
character.levelUp();
renderStats(character);
