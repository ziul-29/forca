player1Name=localStorage.getItem('nome1');
player2Name=localStorage.getItem('nome2');
player1Score= 0;
player2Score= 0;
document.getElementById('nome1').innerHTML=player1Name+':';
document.getElementById('nome2').innerHTML=player2Name+':';
document.getElementById('player1Score').innerHTML=player1Score;
document.getElementById('player2Score').innerHTML=player2Score;
document.getElementById('playerQuestion').innerHTML='Turno de pergunta: '+player1Name;
document.getElementById('playerAnswer').innerHTML='Turno de resposta: '+player2Name;
function send(){
    getword=document.getElementById('word').value;
    word=getword.toLowerCase();
    charat1=word.charAt(1);
    lengthdevide1=Math.floor(word.length/2);
    charat2=word.charAt(lengthdevide1);
    lengthMinus1=word.length-1;
    charat3=word.charAt(lengthMinus1);
    removeCharAt1=word.replace(charat1,'_');
    removeCharAt2=removeCharAt1.replace(charat2,'_');
    removeCharAt3=removeCharAt2.replace(charat3,'_');
    questionWord="<h4 id='worddisplay'>palavra: "+removeCharAt3+"</h4>";
    Inputbox="<br>Resposta:<input type='text' id='inputtextbox'>";
    Checkbox="<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row=questionWord+Inputbox+Checkbox;
    document.getElementById('output').innerHTML=row;
    document.getElementById('word').value='';
}
questionturn=player1Name
answerturn=player2Name
function check(){
    getanswer=document.getElementById('inputtextbox').value;
    answer=getanswer.toLowerCase();
    if(answer==word){
        if(answerturn==player1Name){
            player1Score=player1Score+1
            document.getElementById('player1Score').innerHTML=player1Score
        }
        else{
            player2Score=player2Score+1
            document.getElementById('player2Score').innerHTML=player2Score
        }
    } 
    if(answerturn==player2Name){
        answerturn=player1Name
        questionturn=player2Name
    }
    else{
        answerturn=player2Name
        questionturn=player1Name
    }
    document.getElementById('playerQuestion').innerHTML='Turno de pergunta: '+questionturn;
    document.getElementById('playerAnswer').innerHTML='Turno de resposta: '+answerturn;
    document.getElementById('output').innerHTML='';

}
