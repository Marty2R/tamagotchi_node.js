//import readline from "node:readline/promises";
const fs = require('fs');

console.log(`
    ---- PRESS SPACE FOR START ----`);
console.log(`
                =^.^=
                                `); 

// Crée le fichier texte de sauvegarde des données du chat :
function createAndWrite (file, content) {

    fs.writeFile(file, content, function (err) {

        if (err) throw err;

    });

}

// Récupère le nom du chat dans un prompt dans la console :
function catName (params) { 

    const readline = require('readline').createInterface({

        input: process.stdin,
        output: process.stdout

    });

    readline.question("Enter cat name : ", name => {

        // Enregistre les informations du chat dans le fichier json :
        createAndWrite("cat_data.json", `[["cat_name", "${name}"], ["cat_health", 100], ["cat_hungry", 100], ["cat_bored", 100]]`);

        console.log(`
        Welcome ${name} !
        `);

        readline.close();

    });
    
}

function startGame () {

    console.log(`
    -- Welcome to Tamagotchi --
    `);

    catName();
    
} startGame();