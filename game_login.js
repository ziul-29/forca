function botaoadicionar(){
    nome1=document.getElementById('nome1input').value;
    nome2=document.getElementById('nome2input').value;
    localStorage.setItem('nome1',nome1);
    localStorage.setItem('nome2',nome2);
    window.location='game_page.html';
}
