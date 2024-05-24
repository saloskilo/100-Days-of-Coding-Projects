const currenttime=document.getElementById('time')

setInterval(() => {
    let t=new Date();
    currenttime.innerHTML=t.toLocaleTimeString();
}, 1000);