// importo le funzioni create nei due file js precedenti 
const firstFunction = require(`./names`);
const secondFunction = require(`./hobbies`);

// verifico in terminale inserendo node js/people che abbia importato le due funzioni 

function finalInfo(){
    const final = {
        "fullName":firstFunction(),
        "hobbies":secondFunction()
        
    }
    return final
}
console.log(finalInfo())
