// importo le funzioni create nei due file js precedenti 
const fullName = require('./names');
const hobbies = require('./hobbies');

// verifico in terminale inserendo node js/people che abbia importato le due funzioni 

function finalInfo(){
    return {
        fullName: fullName("Mauro", "Anastasi"),
        hobbies: hobbies("videogames", "cinema", "food")
    };
}
console.log(finalInfo())