const frases = ["O que é que tem nome mas ninguém acredita?", "O que é perfeito mas não deveria existir?", "O que é que somos mas não podemos tocar?"];
const randomPhrase = frases[Math.floor(Math.random() * frases.length)];
const response = ['o impossivel', 'o impossível', 'o impossivel ', 'o impossível ']

document.getElementById("input").placeholder=randomPhrase;

const isCorrect = function() {
    const value = (document.getElementById("input").value).toLowerCase();
    if (value == response[0] || value == response[1] || value == response[2] || value == response[3]){
        document.getElementById("segunda-dobra").classList.remove('hide-me');
        window.scrollTo(0, document.body.scrollHeight);
        document.getElementById("primeira-dobra").classList.add('hide-me');
    } else{
        document.getElementById("response").classList.add('wrong');
        document.getElementById("input").value = "";

    }
}

const wrongReset = function() {
    document.getElementById("response").classList.remove('wrong');
}