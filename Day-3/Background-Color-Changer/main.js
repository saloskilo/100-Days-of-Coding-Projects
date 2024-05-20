const btnchangerGreen=document.getElementById('btnGreen')
const body=document.getElementById('body');
const btnchangerBlue=document.getElementById('btnBlue')



function bckchangerGreen(){
body.style.backgroundColor='green';
}

function bckchangerBlue(){
    body.style.backgroundColor='blue';
    }

btnchangerGreen.addEventListener('click',bckchangerGreen);

btnchangerBlue.addEventListener('click',bckchangerBlue);