const fs = require('fs');

let cat = [
    ["cat_health", 100],
    ["cat_hungry", 100],
    ["cat_bored", 100]
]

function createAndWrite (file, content) { // Crée le fichier texte de sauvegarde des données du chat.

    fs.writeFile(file, content, function (err) {

        if (err) throw err;
        console.log('New file saved !');

    });

} 

createAndWrite("cat_emotion.json", [["cat_health", 100], ["cat_hungry", 100], ["cat_bored", 100]]);
createAndWrite("cat_emotion.json", "cat_emotion.json");