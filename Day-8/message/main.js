const inputtext = document.querySelector('#text');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit');


messageSent = () => {

    const input = inputtext.value;

    console.log(input);
    const msg = `Message sent succesfully:  ${input}`;
    message.innerHTML = msg;

}

submit.addEventListener('click', messageSent)




