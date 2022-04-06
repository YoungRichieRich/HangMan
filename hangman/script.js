let word = "I like convertibles";
word = word.toUpperCase();
let alphabet = 'aąbcćdeęfghijklłmnńoópqrsśtuvwxyzżź'.toUpperCase().split('');
let wrongGuess = 0;
let hiddenWord;
let no = new Audio("classic_hurt.mp3");
let yes = new Audio("yes.wav");
let yhea = new Audio("yhea.mp3");

hideWord();
function showWord(wordToShow){
    document.getElementById("board").innerHTML = wordToShow;
    
}

function hideWord(){
    hiddenWord = word;
 
    for (const key in hiddenWord) {
        if(hiddenWord.charAt(key) !== " "){
            hiddenWord = hiddenWord.replace(hiddenWord[key],"-");
        }
    }
}

hideWord();
window.onload = start;


function start(){
    showWord(hiddenWord);

    let divContent = "";
    for (let i = 0; i < alphabet.length; i++) {
        divContent += '<div id= "div' + i + '"onclick=checkLetter('+i+') class="letter">' + alphabet[i] +'</div>';
    }
    

    document.getElementById("alphabet").innerHTML = divContent;
}

function checkLetter(number){
    let element = "div" + number;
    let isCorrect=false;
    for(let i = 0; i < word.length; i++){
        
        if(alphabet[number] == word.charAt(i)){
            hiddenWord = hiddenWord.substring(0, i) + word.charAt(i) + hiddenWord.substring(i+1);
            isCorrect=true;
        }
    }

    if(isCorrect){
        yes.play();
        document.getElementById(element).style.background="#003300";
        document.getElementById(element).style.color="#00C000";
        document.getElementById(element).style.border="3px solid #00C000";
        document.getElementById(element).style.cursor="default";
        showWord(hiddenWord);
    }else{
        no.play();
        document.getElementById(element).style.background="#330000";
        document.getElementById(element).style.color="#C00000";
        document.getElementById(element).style.border="3px solid #C00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick",";");
        wrongGuess++;
        document.getElementById("gallows").innerHTML = '<img src="img/s' + wrongGuess + '.jpg"/>';
       
    }

    if(word == hiddenWord){
        yhea.play();
        document.getElementById("alphabet").innerHTML = "Wygrałeś! B)"+
        '<br/><br/><span class="resetW" onclick = "location.reload()"> ZAGRAJ PONOWNIE</span>';
    }

    if(wrongGuess == 9){

        document.getElementById("alphabet").innerHTML = "Przegrałeś :("+'<br/><br/>'+"hasło: " + word +
        '<br/><br/><span class="resetL" onclick = "location.reload()"> ZAGRAJ PONOWNIE</span>';
    }

}

