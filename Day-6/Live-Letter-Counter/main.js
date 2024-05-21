
const textarea = document.getElementById('textArea');
const counter = document.getElementById('counter');

function counterCharacter() {
    const textLength = textarea.value.length;
    counter.innerText = `${textLength}`;
}

textarea.addEventListener('keyup', counterCharacter);

